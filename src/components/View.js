import React from 'react';
import Skills from './Skills';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';

export const View = ({student,deleteData}) => {

    return( student.map( (student) => (
        <tr key={student.name}>
            <td>{student.name} <br/>
            {student.email} <br/>
            <a href={student.website}>{student.website}</a> <br/>
            {student.gender} <br/>
            <Skills skills={student.skills}/>
            </td>
            <td>
            <img src={student.image} alt='logo' />
            </td>
            <td className='delete' onClick={() => deleteData(student.name)}>
            <Icon size={25} icon={trash}/>
            </td>           
        </tr>            
    ))
    );
}

export default View;
