export interface ActionFlow {
  id: number;
  process: string;
  description: string;
  status: 'In Progress' | 'Complete' | 'Cancelled';
  priority: string;
  deadline: Date;
}

export interface Action {
  actionFlowID: number;
  id: number;
  label: string;
  assignee: string;
  url: string
  deadline: string;
  complete: boolean;
}

export const ActionData: Action[] = [
  {
    actionFlowID: 1,
    id: 101,
    label: "Verify invoice details against Q2 marketing expenses",
    assignee: "Anthony Flores",
    url: "https://app.yourdomain.com/invoice/verify",
    deadline: "2025-06-05T12:00:00Z",
    complete: false
  },
  {
    actionFlowID: 1,
    id: 102,
    label: "Approve invoice in accounting system after validation",
    assignee: "Emily Chen",
    url: "https://app.yourdomain.com/invoice/approve",
    deadline: "2025-06-10T17:00:00Z",
    complete: false
  },
  {
    actionFlowID: 2,
    id: 201,
    label: "Send welcome email with onboarding instructions",
    assignee: "Rebecca Allen",
    url: "https://app.yourdomain.com/onboarding/email",
    deadline: "2025-05-13T09:00:00Z",
    complete: true
  },
  {
    actionFlowID: 2,
    id: 202,
    label: "Add new hire to payroll system and assign benefits",
    assignee: "David Kim",
    url: "https://app.yourdomain.com/onboarding/payroll",
    deadline: "2025-05-14T17:00:00Z",
    complete: true
  },
  {
    actionFlowID: 3,
    id: 301,
    label: "Export server logs for audit and compliance reporting",
    assignee: "Anthony Flores",
    url: "https://app.yourdomain.com/audit/logs",
    deadline: "2025-05-28T10:00:00Z",
    complete: false
  },
  {
    actionFlowID: 3,
    id: 302,
    label: "Run vulnerability scan across all production servers",
    assignee: "Megan Stone",
    url: "https://app.yourdomain.com/audit/scan",
    deadline: "2025-05-30T18:00:00Z",
    complete: false
  },
  {
    actionFlowID: 4,
    id: 401,
    label: "Deploy new feature to staging environment for QA",
    assignee: "Anthony Flores",
    url: "https://app.yourdomain.com/feature/deploy-staging",
    deadline: "2025-05-27T15:00:00Z",
    complete: false
  },
  {
    actionFlowID: 5,
    id: 501,
    label: "Finalize homepage design and deliver to developers",
    assignee: "Tina Morales",
    url: "https://app.yourdomain.com/redesign/finalize",
    deadline: "2025-04-28T17:00:00Z",
    complete: true
  },
  {
    actionFlowID: 6,
    id: 601,
    label: "Review vendor contract and highlight renewal clauses",
    assignee: "Sophia Reyes",
    url: "https://app.yourdomain.com/vendor/review",
    deadline: "2025-05-30T14:00:00Z",
    complete: false
  },
  {
    actionFlowID: 6,
    id: 602,
    label: "Renew cloud services subscription before expiry",
    assignee: "Anthony Flores",
    url: "https://app.yourdomain.com/vendor/renew",
    deadline: "2025-06-04T12:00:00Z",
    complete: false
  },
  {
    actionFlowID: 7,
    id: 701,
    label: "Run deduplication script on customer email database",
    assignee: "Brian Carter",
    url: "https://app.yourdomain.com/data/cleanup",
    deadline: "2025-05-09T13:00:00Z",
    complete: true
  },
  {
    actionFlowID: 8,
    id: 801,
    label: "Triage top reported bugs from QA backlog",
    assignee: "Olivia Zhang",
    url: "https://app.yourdomain.com/bugs/triage",
    deadline: "2025-05-23T10:00:00Z",
    complete: false
  },
  {
    actionFlowID: 8,
    id: 802,
    label: "Assign top priority bugs to appropriate engineers",
    assignee: "Anthony Flores",
    url: "https://app.yourdomain.com/bugs/assign",
    deadline: "2025-05-24T16:00:00Z",
    complete: false
  },
  {
    actionFlowID: 8,
    id: 803,
    label: "Deploy emergency hotfix to production servers",
    assignee: "Noah Patel",
    url: "https://app.yourdomain.com/bugs/deploy",
    deadline: "2025-05-25T16:00:00Z",
    complete: false
  },
  {
    actionFlowID: 9,
    id: 901,
    label: "Send feedback form to all employees post-review",
    assignee: "Rebecca Allen",
    url: "https://app.yourdomain.com/reviews/form",
    deadline: "2025-05-25T09:00:00Z",
    complete: true
  },
  {
    actionFlowID: 9,
    id: 902,
    label: "Schedule 1-on-1 performance review meetings",
    assignee: "Anthony Flores",
    url: "https://app.yourdomain.com/reviews/schedule",
    deadline: "2025-06-05T10:00:00Z",
    complete: false
  },
  {
    actionFlowID: 10,
    id: 1001,
    label: "Prepare inventory records for recount session",
    assignee: "Natalie Brooks",
    url: "https://app.yourdomain.com/inventory/prepare",
    deadline: "2025-05-16T10:00:00Z",
    complete: true
  },
  {
    actionFlowID: 10,
    id: 1002,
    label: "Execute physical recount and submit final numbers",
    assignee: "Anthony Flores",
    url: "https://app.yourdomain.com/inventory/recount",
    deadline: "2025-05-18T12:00:00Z",
    complete: false
  }
];

export const ActionFlowData: ActionFlow[] = [
 {
    id: 1,
    process: "Invoice Approval",
    description: "Review and approve vendor invoice for Q2 marketing expenses.",
    status: "In Progress",
    priority: "High",
    deadline: new Date("2025-06-10T17:00:00Z")
  },
  {
    id: 2,
    process: "Onboarding",
    description: "Complete onboarding tasks for new hire: Julia Tran.",
    status: "Complete",
    priority: "Medium",
    deadline: new Date("2025-05-15T23:59:59Z")
  },
  {
    id: 3,
    process: "Security Audit",
    description: "Compile logs and run vulnerability scan for Q2 audit.",
    status: "In Progress",
    priority: "High",
    deadline: new Date("2025-06-01T12:00:00Z")
  },
  {
    id: 4,
    process: "Feature Rollout",
    description: "Deploy new search functionality to production.",
    status: "Cancelled",
    priority: "High",
    deadline: new Date("2025-05-30T23:59:59Z")
  },
  {
    id: 5,
    process: "Website Redesign",
    description: "Finalize homepage redesign and send to dev team.",
    status: "Complete",
    priority: "Low",
    deadline: new Date("2025-05-01T18:00:00Z")
  },
  {
    id: 6,
    process: "Vendor Renewal",
    description: "Review contract and renew cloud service vendor agreement.",
    status: "In Progress",
    priority: "Medium",
    deadline: new Date("2025-06-05T12:00:00Z")
  },
  {
    id: 7,
    process: "Data Cleanup",
    description: "Remove duplicates and validate customer emails.",
    status: "Complete",
    priority: "Low",
    deadline: new Date("2025-05-10T17:00:00Z")
  },
  {
    id: 8,
    process: "Bug Triage",
    description: "Review top 5 bugs and assign to engineering.",
    status: "In Progress",
    priority: "High",
    deadline: new Date("2025-05-25T16:00:00Z")
  },
  {
    id: 9,
    process: "Performance Review",
    description: "Gather feedback and schedule 1-on-1s.",
    status: "In Progress",
    priority: "Medium",
    deadline: new Date("2025-06-15T09:00:00Z")
  },
  {
    id: 10,
    process: "Inventory Recount",
    description: "Perform monthly inventory check for warehouse B.",
    status: "Cancelled",
    priority: "Low",
    deadline: new Date("2025-05-18T12:00:00Z")
  }
];
