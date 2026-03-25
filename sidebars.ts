import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  panelSidebar: [
    {type: 'doc', id: 'panel/introduction', label: '👻 Introduction'},
    {type: 'doc', id: 'panel/requirements', label: '📋 Requirements'},
    {type: 'doc', id: 'panel/installation', label: '🏗 Installation'},
    {type: 'doc', id: 'panel/webserver', label: '🌐 Web Server (Nginx)'},
    {type: 'doc', id: 'panel/ssl', label: '🔐 SSL Certificate'},
    {type: 'doc', id: 'panel/smtp', label: '📧 SMTP Email (Brevo)'},
    {type: 'doc', id: 'panel/queue', label: '⚙ Queue & Cron'},
    {type: 'doc', id: 'panel/super-admin', label: '🛡 Super Admin'},
    {type: 'doc', id: 'panel/theming', label: '🎨 Theming & Branding'},
    {type: 'doc', id: 'panel/updating', label: '🔄 Updating'},
  ],
  wingsSidebar: [
    {type: 'doc', id: 'wings/introduction', label: '🔧 Introduction'},
    {type: 'doc', id: 'wings/installation', label: '🏗 Installation'},
    {type: 'doc', id: 'wings/configuration', label: '⚙ Configuration'},
    {type: 'doc', id: 'wings/ssl', label: '🔐 SSL Certificate'},
    {type: 'doc', id: 'wings/updating', label: '🔄 Updating'},
    {type: 'doc', id: 'wings/troubleshooting', label: '🐞 Troubleshooting'},
  ],
  eggsSidebar: [
    {type: 'doc', id: 'eggs/introduction', label: '🥚 Introduction'},
    {type: 'doc', id: 'eggs/importing', label: '📥 Importing Eggs'},
    {type: 'doc', id: 'eggs/custom', label: '🟢 XCASPER Custom Eggs'},
    {type: 'doc', id: 'eggs/minecraft', label: '🎮 Minecraft Eggs'},
    {type: 'doc', id: 'eggs/source-engine', label: '🎯 Source Engine Eggs'},
    {type: 'doc', id: 'eggs/other', label: '🦀 Other Eggs'},
  ],
  billingSidebar: [
    {type: 'doc', id: 'billing/overview', label: '💳 Overview'},
    {type: 'doc', id: 'billing/plans', label: '📦 Subscription Plans'},
    {type: 'doc', id: 'billing/wallet', label: '👛 KES Wallet'},
    {type: 'doc', id: 'billing/paystack', label: '🏦 Paystack Setup'},
    {type: 'doc', id: 'billing/push-notifications', label: '🔔 Push Notifications'},
    {type: 'doc', id: 'billing/super-admin-billing', label: '⚙ Admin Billing Config'},
  ],
};

export default sidebars;
