import React, { useState } from 'react';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';

export default function CreateTrustGroup() {
  const [formDetails, setFormDetails] = useState({
    groupName: '',
    topic: '',
    members: '',
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div>
      <form>
        <Input
          type="text"
          label="Group Name"
          name="groupName"
          value={formDetails.groupName}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Topic of Discussion (Optional)"
          name="topic"
          value={formDetails.topicName}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Add Members"
          name="addMembers"
          value={formDetails.addMembers}
          onChange={handleInputChange}
        />
        <Button type="submit" style={{ marginTop: '46px' }}>
          Create Group
        </Button>
      </form>
    </div>
  );
}
