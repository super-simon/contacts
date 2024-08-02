export interface IContactCreate {
  fields: {
    "first name": {
      label: string;
      modifier: string;
      value: string;
    }[];
    "last name": {
      label: string;
      modifier: string;
      value: string;
    }[];
    email: {
      label: string;
      modifier: string;
      value: string;
    }[];
  };
  privacy: {
    edit: {
      group_ids: [string];
      user_ids: [string];
    } | null;
    read: {
      group_ids: [string];
      user_ids: [string];
    } | null;
  };
  record_type: string;
}
