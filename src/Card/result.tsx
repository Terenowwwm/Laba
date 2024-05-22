import React from 'react';

interface Props {
  res: string;
}


const Result:React.FC<Props> = ({res}) => {
  return (
    <span>{res}</span>
  )
  ;
};

export default Result;