import React from 'react'
import { Puff } from 'react-loader-spinner';

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <Puff color="#00BFFF" height={160} width={160} />
  </div>
);
