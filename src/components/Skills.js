import React from 'react';

export const Skills = ({skills}) => {
  return ( skills.map( (element) => (
  <>{element}<br/></>
  ))
  );
}

export default Skills;
