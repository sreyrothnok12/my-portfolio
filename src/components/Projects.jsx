import React from 'react';
import ProjectItem from './ProjectItem';
import ject1 from '../assets/ject1.png';
import ject2 from '../assets/ject2.png';
import ject3 from '../assets/ject3.png';
import ject4 from '../assets/ject4.png';
function Projects(props) {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center'>Projects</h1>
            <p className='text-center py-4'>
                I've worked on various projects that showcase my skills and experience in web development.
                Some of my most recent projects include: 
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Eos sunt quod laborum maxime repellendus dolor aliquid mollitia quaerat hic sed reprehenderit, tempora nobis modi vitae cupiditate atque quis omnis dolore!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={ject1} title='BIU' />
                <ProjectItem img={ject2} title='Ecommerc'/>
                <ProjectItem img={ject3} title='Dashboard' />
                <ProjectItem img={ject4} title='BOOK' />
            </div>
           
        </div>
    );
}

export default Projects;
