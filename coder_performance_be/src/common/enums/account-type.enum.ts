export enum AccountType {
    Admin = 1,
    CRM = 2,
    Employer = 3,
    Employee = 4,
    Applicant = 5,
    Guest = 6,
    CRMManager = 7,
}


export const AccountTypeDisplay = [
    { value: AccountType.Applicant, name: 'Applicant' },

    { value: AccountType.Employer, name: 'Employer' },
    { value: AccountType.Employee, name: 'Employee' },

    { value: AccountType.Admin, name: 'Admin', isPortal: true },
    { value: AccountType.CRMManager, name: 'CRM Manager', isPortal: true },
    { value: AccountType.CRM, name: 'CRM', isPortal: true },
];
