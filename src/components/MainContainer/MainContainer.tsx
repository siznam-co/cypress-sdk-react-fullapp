import React, { ReactElement } from "react";

interface Props {
  title: string;
  children: ReactElement;
}

export default function MainContainer(props: Props): ReactElement {
  const { title, children } = props;
  return (
    <div className='py-6'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
        <h1 className='text-2xl font-semibold text-gray-900'>{title}</h1>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>{children}</div>
    </div>
  );
}
