import { Menu, Button, Layout } from 'antd';

const { Header } = Layout;

const menuItems = [
  { key: 'features', label: <a href="#features">Features</a> },
  { key: 'download', label: <a href="#download">Download</a> },
  { key: 'faq', label: <a href="#faq">FAQ</a> },
  { key: 'testimonials', label: <a href="#testimonials">Testimonials</a> },
  { key: 'contact', label: <a href="#contact">Contact</a> },
];

const NavBar: React.FC = () => (
  <Header style={{ background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.07)', padding: '0 24px', display: 'flex', alignItems: 'center', zIndex: 100 }}>
    <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
      <img src="/logo.webp" alt="Multiple Accounts Logo" style={{ width: 40, height: 40, marginRight: 12 }} />
      <span style={{ fontSize: 24, fontWeight: 'bold', color: '#2c3e50' }}>Multi Run</span>
    </div>
    <Menu mode="horizontal" items={menuItems} style={{ flex: 2, minWidth: 400, borderBottom: 'none', justifyContent: 'center' }} />
    <Button type="primary" href="#download" style={{ marginLeft: 24, borderRadius: 5 }}>Download Now</Button>
  </Header>
);

export default NavBar;
