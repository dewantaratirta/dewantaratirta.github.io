
/**
 * Generate Slug from text
 * @param {string} Text 
 * @returns 
 */
const convertToSlug = (Text) => {
    return Text.toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
}

/**
 * Display all projects data
 * @returns array
 */
export const getData = () => {
    ProjectData.forEach((v, i) => {
        //generate slug
        ProjectData[i].slug = convertToSlug(v.title);

        //generate folder structure
        ProjectData[i].header_image = '/projects/' + v.static_folder + '/' + v.header_image;

        //generate links
        ProjectData[i].link = '/project/'+ProjectData[i].slug;
    });

    return ProjectData;
}

let ProjectData = [
    {
        static_folder: 'kumon',
        title: 'Kumon ASF - ON STAGE EVENT',
        description: 'Every year kumon held an innaguration event',
        header_image: 'header.png',
        date: '2019',
        content: [
            {
                type: 'text',
                content: 'hehehehehe'
            },
        ]
    },
];