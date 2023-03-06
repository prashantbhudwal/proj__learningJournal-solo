#!/bin/bash

# Define an array of posts with their titles and file names
declare -a posts=(
    "Prototype Management vs. Product Management:prototype-management-vs-product-management"
    "5 Tips for Effective Project Management:5-tips-for-effective-project-management"
    "The Importance of User Experience in Design:importance-of-user-experience-in-design"
    "How to Conduct Effective User Research:how-to-conduct-effective-user-research"
    "10 Principles of Design Thinking:10-principles-of-design-thinking"
    "The Benefits of Agile Development:benefits-of-agile-development"
    "How to Create an Effective Product Roadmap:how-to-create-an-effective-product-roadmap"
)

# Loop through the posts array and generate markdown files for each post
for post in "${posts[@]}"
do
    # Split the post title and file name by the colon separator
    IFS=":" read -r title file <<< "$post"

    # Create the markdown file with the post title and file name
    touch "src/$file.md"

    # Write the markdown content to the file
    echo "# $title" > "src/$file.md"
    echo "" >> "src/$file.md"
    echo "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in diam libero. Sed lobortis leo vel velit aliquam congue. Phasellus vehicula, nulla sed luctus accumsan, metus mi varius turpis, nec maximus sapien massa ut velit. Fusce aliquet risus et libero tincidunt congue. Sed imperdiet rutrum felis, eu dignissim velit pulvinar non. Nam non ipsum non elit suscipit feugiat. Sed ullamcorper ultricies ipsum." >> "src/$file.md"
done

# Print a message indicating the script has finished
echo "Markdown files generated successfully!"
