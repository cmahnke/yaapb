#!/usr/bin/env python3
import sys
import argparse
import re
from lxml import etree

def process_html_file(input_file_path, output_file_path):
    try:
        # Use lxml's HTML parser to maintain original formatting
        parser = etree.HTMLParser()
        tree = etree.parse(input_file_path, parser)

        # Find all first-level li elements under ul with class "cameras"
        lis = tree.xpath('//ul[@class="cameras"]/li')

        if not lis:
            print("Warning: 'ul' element with class 'cameras' not found or has no list items. No changes will be made.")
        else:
            for li in lis:
                # Find the preceding comment sibling
                prev_sibling = li.getprevious()
                while prev_sibling is not None and not isinstance(prev_sibling, etree._Comment):
                    prev_sibling = prev_sibling.getprevious()

                if prev_sibling is not None and prev_sibling.text:
                    comment_text = prev_sibling.text.strip()
                    if comment_text:
                        # Clean up the comment text to create a valid ID
                        sanitized_id = re.sub(r'[^a-zA-Z0-9_]', '_', comment_text).lower()
                        li.set('id', sanitized_id)
                        print(f"Updated li with id: {sanitized_id}")

        # Serialize the modified tree back to a string, preserving original formatting
        modified_html = etree.tostring(tree, pretty_print=True, encoding='unicode', method='html')

        if output_file_path == '-':
            sys.stdout.write(modified_html)
        else:
            with open(output_file_path, 'w', encoding='utf-8') as f:
                f.write(modified_html)
            print(f"File '{output_file_path}' has been updated.")

    except FileNotFoundError:
        print(f"Error: The input file at '{input_file_path}' was not found.")
        sys.exit(1)
    except Exception as e:
        print(f"An error occurred: {e}")
        sys.exit(1)

def main():
    parser = argparse.ArgumentParser(
        description="Add id's tor cross references",
        formatter_class=argparse.RawTextHelpFormatter
    )

    parser.add_argument(
        '-i', '--input',
        type=str,
        required=True,
        help="Path to the HTML file to process."
    )

    parser.add_argument(
        '-o', '--output',
        type=str,
        default='-',
        help="Path to the output file. Defaults to '-' for stdout."
    )

    if len(sys.argv) == 1:
        parser.print_help(sys.stderr)
        sys.exit(1)

    args = parser.parse_args()
    process_html_file(args.input, args.output)

if __name__ == "__main__":
    main()
