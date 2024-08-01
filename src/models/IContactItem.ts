export interface IContactItem {
  avatar_url: string;
  children: [string];
  employers_info: [
    {
      company_name: string;
      contact_id: string;
    },
  ];
  company_last_contacted: {
    in: {
      deletion_tstamp: any;
      object_id: any;
      tstamp: any;
      type: any;
      user_id: any;
      direction: string;
    };
    out: {
      deletion_tstamp: any;
      object_id: any;
      tstamp: any;
      type: any;
      user_id: any;
      direction: string;
    };
  };
  lc: {
    company_lc: {
      in: {
        deletion_tstamp: any;
        object_id: any;
        tstamp: any;
        type: any;
        user_id: any;
        direction: string;
      };
      out: {
        deletion_tstamp: any;
        object_id: any;
        tstamp: any;
        type: any;
        user_id: any;
        direction: string;
      };
      last: {
        deletion_tstamp: any;
        object_id: any;
        tstamp: any;
        type: any;
        user_id: any;
        direction: string;
      };
    };
    user_lc: {
      in: {
        deletion_tstamp: any;
        object_id: any;
        tstamp: any;
        type: any;
        user_id: any;
        direction: string;
      };
      out: {
        deletion_tstamp: any;
        object_id: any;
        tstamp: any;
        type: any;
        user_id: any;
        direction: string;
      };
      last: {
        deletion_tstamp: any;
        object_id: any;
        tstamp: any;
        type: any;
        user_id: any;
        direction: string;
      };
    };
    last_user: {
      avatar_url: string;
      email: string;
      is_active: boolean;
      name: string;
      user_id: string;
    };
  };
  created: string;
  creator: string;
  fields: {
    [key: string]: [
      {
        field_id: string;
        modifier: string;
        value: string;
      },
    ];
    property2: [
      {
        field_id: string;
        modifier: string;
        value: string;
      },
    ];
  };
  id: string;
  is_important: any;
  last_contacted: {
    deletion_tstamp: any;
    object_id: any;
    tstamp: any;
    type: any;
    user_id: any;
    direction: string;
  };
  object_type: string;
  last_contacted_user: string;
  owner_id: string;
  privacy: {
    edit: {
      group_ids: [string];
      user_ids: [string];
    };
    read: {
      group_ids: [string];
      user_ids: [string];
    };
  };
  record_type: string;
  reminder: {
    active: true;
    contact_id: string;
    days_till_triggered: 0;
    period: 0;
    triggered: true;
  };
  tags: [{ id: string; tag: string }];
  updated: string;
  updater: string;
  stages_info: [
    {
      pipeline_id: string;
      pipeline_name: string;
      stage_name: string;
      entered_data: string;
      is_final: true;
      days_limit: 0;
    },
  ];
  notice: {
    created: string;
    updated: string;
    creator: {
      avatar_url: string;
      email: string;
      is_active: true;
      name: string;
      user_id: string;
    };
    updated_by: {
      avatar_url: string;
      email: string;
      is_active: true;
      name: string;
      user_id: string;
    };
    text: string;
    color: string;
  };
  contexts: [
    {
      context_key: any;
      context: [
        {
          source: string;
          metadata: {
            file_id: string;
            contact_id: string;
            file_name: string;
            file_size: 0;
            mime_type: string;
            uploader: {
              avatar_url: string;
              email: string;
              is_active: true;
              name: string;
              user_id: string;
            };
            uploaded_at: string;
            pipeline_ids: [string];
          };
        },
      ];
    },
  ];
}
