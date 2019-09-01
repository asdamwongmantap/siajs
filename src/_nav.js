export default {
  
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-home',
      badge: {
        variant: 'info',
        text: '',
      },
    },
   
    {
      name: 'Setup',
      url: '/setup',
      icon: 'icon-settings',
      children: [
        {
          name: 'Data',
          url: '/setup/dataform',
          icon: 'icon-settings',
          badge: {
            variant: 'info',
            text: '',
          },
        },
        
      ],
    },
    
  ],
};
