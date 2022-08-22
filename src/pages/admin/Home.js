import React from 'react';
import Notification from '../../components/home/Notification';
import RegisteredMembers from '../../components/home/RegisteredMembers';
import TotalMembers from '../../components/home/TotalMembers';
import TrustGroup from '../../components/home/TrustGroup';
import { PageTitle } from '../../utils/common';

export default function Home() {
  return (
    <div>
      <PageTitle>Admin Dashboard</PageTitle>
      <div className="row">
        <div className="col-md-8">
          <TotalMembers />
          <TrustGroup />
        </div>
        <div className="col-md-4">
          <Notification />
        </div>
      </div>
      <RegisteredMembers />
    </div>
  );
}
