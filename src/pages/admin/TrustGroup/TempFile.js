import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {Div, Paragraph} from '../../../utils/common';

export default function TempFile({handleFileChange}) {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log({acceptedFiles});
    handleFileChange(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <Div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <Paragraph style={{ fontSize: '16px', color: '#000000' }}>
            Drag and drop your document here or just{' '}
            <span style={{ textDecoration: 'none', color: '#14a800' }}>
              browse
            </span>{' '}
            files
            <Paragraph style={{ color: '#000000', marginTop: '20px' }}>
              Max. Size 5MB
              <Paragraph style={{ fontSize: '10px' }}>
                PNG or JPG only
              </Paragraph>
            </Paragraph>
          </Paragraph>
        )}
      </Div>
    </div>
  );
}
