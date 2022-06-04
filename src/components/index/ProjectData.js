import { dev } from '$app/env';

let baseUrl = (dev) ? 'http://localhost:3000/' : 'https://dewantaratirta.github.io/';

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
    let tempData = [];
    console.log(tempData);
    tempData = ProjectData;
    tempData.forEach((v, i) => {
        console.log(v,i)
        //generate slug
        tempData[i].slug = convertToSlug(v.title);

        //generate folder structure
        tempData[i].header_image = baseUrl + 'projects/' + v.static_folder + '/' + v.header_image;

        //generate links
        tempData[i].link = 'project/'+ProjectData[i].slug;
    });
    console.log(tempData);
    return tempData;
}

export const getDataBySlug = (Slug) => {
    let data = getData();
    let returns = [];

    data.forEach( project => {
        if( project.slug == Slug ){
            returns = project;
        }
    });
    return returns;
}

const ProjectData = [
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