import React from 'react';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';
import './View.css';

export const View = ({student,deleteData}) => {
    
    return( student.map( (student) => (
        
        <tr key={student.name}>
            <td>{student.name} <br/>
            {student.email} <br/>
            <a href={student.website}>{student.website}</a> <br/>
            {student.gender} <br/>
            {student.skills} 
            </td>
            <td>
            <img src={student.image} alt='logo' />
            </td>
            <td className='delete' onClick={() => deleteData(student.name)}>
            <Icon icon={trash}/>
            </td>           
        </tr>            
    ))
    );
}