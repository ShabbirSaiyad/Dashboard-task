import dashboardOff from '../Assets/dashboard-off.png'
import invoice from '../Assets/invoice-off.png'
import proposal from '../Assets/proposals-off.png'
import service from '../Assets/services-off.png'
import transaction from '../Assets/transactions-off.png'
import project from '../Assets/projects-off.png'
import customer from '../Assets/customers.png'
import dashboardOn from '../Assets/dashboard-on.png'
import invoiceOn from '../Assets/invoice-on.png'
import proposaOn from '../Assets/proposals-on.png'
import serviceOn from '../Assets/services-on.png'
import transactionOn from '../Assets/transactions-on.png'
import projectOn from '../Assets/projects-on.png'
import customerOn from '../Assets/customers-on.png'




export const sidebarLinks = [
    {
      id: 1,
      name: "Dashboard",
      path: dashboardOff,
      activePath: dashboardOn,
    
    },
    {
      id: 2,
      name: "Invoices",
      path: invoice,
      activePath: invoiceOn
      
    },
    {
      id: 3,
      name: "Proposals",
      path: proposal,
      activePath:proposaOn
    },
    {
      id: 4,
      name: "Services",
      path: service,
      activePath:serviceOn
    },
    {
      id: 5,
      name: "Transactions",
      path: transaction,
      activePath:transactionOn

    },
    {
      id: 6,
      name: "Projects",
      path: project,
      activePath:projectOn
    },
    {
        id: 7,
        name: "Customers",
        path: customer,
        activePath:customerOn
      },
      
  ];
  