
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import OodoProducts from "./components/OodoProducts"
import OodoCustom from "./components/OodoCustom"
import OodoIntegration from "./components/OodoIntegration"

import SalesforceDevelopment from './components/SalesforceDevelopment'
import SalesforceLightning from './components/SalesforceLightning'
import SalesforceConsulting from './components/SalesforceConsulting'
import SalesforceTraining from './components/SalesforceTraining'
import SalesforceBilling from './components/SalesforceBilling'
import SalesforceClm from './components/SalesforceClm'
import SalesforceCfq from './components/SalesforceCfq'
import SalesforceCrm from './components/SalesforceCrm'
import SalesforceEngineering from './components/SalesforceEngineering'
import SalesforceCommerce from './components/SalesforceCommerce'
import SalesforceErp from './components/SalesforceErp'
import SalesforceFinancials from './components/SalesforceFinancials'
import SalesforceService from './components/SalesforceService'
import SalesforceChain from './components/SalesforceChain'
import { useThemeStore } from './components/store/useThemeStore'
import Services from './components/Services'







const App = () => {
  const {theme } =useThemeStore()
  return (
    <>
    <div className="overflow-x-hidden" data-theme = {theme}>

    <Routes> 
     
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Home/>}/>
      <Route path='/about'  element={<About/>}/> 
    
     <Route path="/odoo-customization" element={<OodoCustom />} />
      <Route path="/odoo-products" element={<OodoProducts />} />
      <Route path="/odoo-integration" element={<OodoIntegration />} />

   

      <Route path="/salesforce-development" element={<SalesforceDevelopment />} />
      <Route path="/salesforce-lightning" element={<SalesforceLightning />} />
      <Route path="/salesforce-consulting" element={<SalesforceConsulting />} />
      <Route path="/salesforce-training" element={<SalesforceTraining />} />
      <Route path="/salesforce-billing" element={<SalesforceBilling />} />
      <Route path="/salesforce-clm" element={<SalesforceClm />} />
      <Route path="/salesforce-cfq" element={<SalesforceCfq />} />
      <Route path="/salesforce-crm" element={<SalesforceCrm />} />
      <Route path="/salesforce-engineering" element={<SalesforceEngineering />} />
      <Route path="/salesforce-commerce" element={<SalesforceCommerce />} />
      <Route path="/salesforce-erp" element={<SalesforceErp />} />
      <Route path="/salesforce-finacials" element={<SalesforceFinancials />} />
      <Route path="/salesforce-service" element={<SalesforceService />} />
      <Route path="/salesforce-chain" element={<SalesforceChain />} />



      <Route path="/services" element={<Services />} />
      

     
      <Route path='/contact' element={<Contact/>}/>
    
    </Routes>
    </div>
    </>
  )
}

export default App