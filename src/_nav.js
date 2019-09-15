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
        {
          name: 'Jenis Rekening',
          url: '/setup/listjenisrekening',
          icon: 'icon-settings',
          badge: {
            variant: 'info',
            text: '',
          },
        },
        
      ],
    },

    {
      name: 'Jurnal',
      url: '/jurnal',
      icon: 'icon-calculator',
      children: [
        {
          name: 'Jurnal Umum',
          url: '/jurnal/listjurnalumum',
          icon: 'icon-settings',
          badge: {
            variant: 'info',
            text: '',
          },
        },

        {
          name: 'Jurnal Kas Keluar',
          url: '/jurnal/kaskeluar',
          icon: 'icon-settings',
          badge: {
            variant: 'info',
            text: '',
          },
        },
        
      ],
    },
    {
      name: 'Posting',
      url: '/posting',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: '',
      },
    },
    {
      name: 'Laporan',
      url: '/laporan',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: '',
      },
    },
    
  ],
};
