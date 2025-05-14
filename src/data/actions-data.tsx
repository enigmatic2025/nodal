export interface Action {
  process: string;
  description: string;
  status: 'In Progress' | 'Complete' | 'Cancelled';
  duedate: Date;
  conversation: Array<{ user: string; message: string; timestamp: string }>;
  link: string;
}

export interface AuditEntry {
    id: number;
    label: string;
    user: string;
    timestamp?: string;
}

export const AuditTrailData: AuditEntry[] = [
  {
    id: 4920,
    label: "The task was successfully assigned to John Wiseman for further action and follow-up.",
    user: "John Wiseman",
    timestamp: "2025-05-01 10:12",
  },
  {
    id: 5013,
    label: "The previously assigned action has been unassigned by Ashley Alexander and is now pending reassignment.",
    user: "Ashley Alexander",
    timestamp: "2025-05-02 14:35",
  },
  {
    id: 7931,
    label: "Ashley Alexander reassigned the action item to Jeff Nemmers to ensure timely completion.",
    user: "Ashley Alexander",
    timestamp: "2025-05-03 09:20",
  },
  {
    id: 8367,
    label: "Jeff Nemmers marked the task as completed after verifying all requirements were met.",
    user: "Jeff Nemmers",
    timestamp: "2025-05-04 16:50",
  },
];


export const ActionsData: Action[] = [
  {
    process: 'Invoice Review',
    description: 'Validate Q2 invoice for duplicate line items.',
    status: 'In Progress',
    duedate: new Date('2025-05-10'),
    conversation: [
      { user: 'Sam', message: 'Flagged a duplicate on line 3.', timestamp: '2025-05-05T10:15:00' },
      { user: 'Jenna', message: 'Reviewed and confirmed.', timestamp: '2025-05-06T09:22:00' },
    ],
    link: 'https://app.company.com/forms/invoice-review-1245'
  },
  {
    process: 'Carrier Onboarding',
    description: 'Upload W-9 and insurance docs for SmartHaul LLC.',
    status: 'In Progress',
    duedate: new Date('2025-05-12'),
    conversation: [],
    link: 'https://app.company.com/onboarding/smarthaul'
  },
  {
    process: 'Temperature Alert Follow-Up',
    description: 'Investigate reefer trailer 342 temp spike.',
    status: 'Cancelled',
    duedate: new Date('2025-05-08'),
    conversation: [
      { user: 'Mike', message: 'Waiting on telematics log.', timestamp: '2025-05-07T14:10:00' },
    ],
    link: 'https://telematics.company.com/alerts/342'
  },
  {
    process: 'Contract Signature',
    description: 'Send DocuSign to new vendor.',
    status: 'Complete',
    duedate: new Date('2025-05-03'),
    conversation: [],
    link: 'https://docusign.com/contract/8391'
  },
  {
    process: 'Dispatch Confirmation',
    description: 'Confirm delivery window with Bravo Logistics.',
    status: 'Cancelled',
    duedate: new Date('2025-05-11'),
    conversation: [
      { user: 'Sara', message: 'Holding off until client confirms site hours.', timestamp: '2025-05-05T17:00:00' },
    ],
    link: 'https://dispatch.company.com/orders/5619'
  },
  {
    process: 'System Update',
    description: 'Push TMS integration patch for rate engine.',
    status: 'In Progress',
    duedate: new Date('2025-05-14'),
    conversation: [
      { user: 'DevOps', message: 'Patch pushed to staging.', timestamp: '2025-05-06T13:00:00' },
    ],
    link: 'https://git.company.com/merge-request/348'
  },
  {
    process: 'Payment Exception',
    description: 'Resolve ACH failure for Vendor ID #55902.',
    status: 'In Progress',
    duedate: new Date('2025-05-09'),
    conversation: [],
    link: 'https://finance.company.com/exceptions/55902'
  },
  {
    process: 'Customer Escalation',
    description: 'Investigate missed delivery for PO#99843.',
    status: 'Complete',
    duedate: new Date('2025-05-07'),
    conversation: [
      { user: 'Logistics', message: 'Driver arrived late due to breakdown.', timestamp: '2025-05-06T08:44:00' },
    ],
    link: 'https://support.company.com/escalations/99843'
  },
  {
    process: 'Access Rights Review',
    description: 'Audit admin access for DB cluster.',
    status: 'In Progress',
    duedate: new Date('2025-05-15'),
    conversation: [],
    link: 'https://security.company.com/audits/db-access'
  },
  {
    process: 'Freight Quote Comparison',
    description: 'Evaluate LTL quotes for Midwest outbound loads.',
    status: 'Complete',
    duedate: new Date('2025-05-04'),
    conversation: [
      { user: 'Ops', message: 'Chosen carrier: Central Freight.', timestamp: '2025-05-03T16:11:00' },
    ],
    link: 'https://freight.company.com/quotes/midwest-outbound'
  },
  {
    process: 'Invoice Review',
    description: 'Validate Q2 invoice for duplicate line items.',
    status: 'In Progress',
    duedate: new Date('2025-05-10'),
    conversation: [
      { user: 'Sam', message: 'Flagged a duplicate on line 3.', timestamp: '2025-05-05T10:15:00' },
      { user: 'Jenna', message: 'Reviewed and confirmed.', timestamp: '2025-05-06T09:22:00' },
    ],
    link: 'https://app.company.com/forms/invoice-review-1245'
  },
  {
    process: 'Carrier Onboarding',
    description: 'Upload W-9 and insurance docs for SmartHaul LLC.',
    status: 'In Progress',
    duedate: new Date('2025-05-12'),
    conversation: [],
    link: 'https://app.company.com/onboarding/smarthaul'
  },
  {
    process: 'Temperature Alert Follow-Up',
    description: 'Investigate reefer trailer 342 temp spike.',
    status: 'Cancelled',
    duedate: new Date('2025-05-08'),
    conversation: [
      { user: 'Mike', message: 'Waiting on telematics log.', timestamp: '2025-05-07T14:10:00' },
    ],
    link: 'https://telematics.company.com/alerts/342'
  },
  {
    process: 'Contract Signature',
    description: 'Send DocuSign to new vendor.',
    status: 'Complete',
    duedate: new Date('2025-05-03'),
    conversation: [],
    link: 'https://docusign.com/contract/8391'
  },
  {
    process: 'Dispatch Confirmation',
    description: 'Confirm delivery window with Bravo Logistics.',
    status: 'Cancelled',
    duedate: new Date('2025-05-11'),
    conversation: [
      { user: 'Sara', message: 'Holding off until client confirms site hours.', timestamp: '2025-05-05T17:00:00' },
    ],
    link: 'https://dispatch.company.com/orders/5619'
  },
  {
    process: 'System Update',
    description: 'Push TMS integration patch for rate engine.',
    status: 'In Progress',
    duedate: new Date('2025-05-14'),
    conversation: [
      { user: 'DevOps', message: 'Patch pushed to staging.', timestamp: '2025-05-06T13:00:00' },
    ],
    link: 'https://git.company.com/merge-request/348'
  },
  {
    process: 'Payment Exception',
    description: 'Resolve ACH failure for Vendor ID #55902.',
    status: 'In Progress',
    duedate: new Date('2025-05-09'),
    conversation: [],
    link: 'https://finance.company.com/exceptions/55902'
  },
  {
    process: 'Customer Escalation',
    description: 'Investigate missed delivery for PO#99843.',
    status: 'Complete',
    duedate: new Date('2025-05-07'),
    conversation: [
      { user: 'Logistics', message: 'Driver arrived late due to breakdown.', timestamp: '2025-05-06T08:44:00' },
    ],
    link: 'https://support.company.com/escalations/99843'
  },
  {
    process: 'Access Rights Review',
    description: 'Audit admin access for DB cluster.',
    status: 'In Progress',
    duedate: new Date('2025-05-15'),
    conversation: [],
    link: 'https://security.company.com/audits/db-access'
  },
  {
    process: 'Freight Quote Comparison',
    description: 'Evaluate LTL quotes for Midwest outbound loads.',
    status: 'Complete',
    duedate: new Date('2025-05-04'),
    conversation: [
      { user: 'Ops', message: 'Chosen carrier: Central Freight.', timestamp: '2025-05-03T16:11:00' },
    ],
    link: 'https://freight.company.com/quotes/midwest-outbound'
  }
];
