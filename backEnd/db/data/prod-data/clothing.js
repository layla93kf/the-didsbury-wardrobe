const clothingData = [
  {
    name: 'Linda Lace Shift Dress',
    origin: 'Reiss',
    size: '14',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGGCsfbCSs/8NraKDRZHnllU57N-lHZdA/view?embed',
  },
  {
    name: 'Black and Gold & Other stories',
    origin: '& other stories',
    size: '8',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFybZvfeI/0guEGM8BvJm7oiS46_dAJQ/view?embed',
  },
  {
    name: 'Black Silk Sheer Dress with Slip',
    origin: 'Paul Smith',
    size: '10/12',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyfIGsOY/Yyj0fIoXkIf8-NMIcIfr-A/view?embed',
  },
  {
    name: 'Black Silk Slip',
    origin: '& Other Stories',
    size: '6/8',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFybbq3Pc/qneSm6-9is2N6JOczHLncw/view?embed',
  },
  {
    name: 'Long Gold Sequin Gown',
    origin: 'Jenny Packham',
    size: '16',
    category: 'dresses',
    price: 'RENT FROM £40',
    photos:
      'https://www.canva.com/design/DAGFybaWQZ4/Aga8QHZiHzr1qLlXDnaBiw/view?embed',
  },

  {
    name: 'Vintage Green Oversized Mini',
    origin: 'Paul & Joe',
    size: '8/10',
    category: 'dresses',
    price: 'RENT FROM £40',
    photos:
      'https://www.canva.com/design/DAGFyRmlWPE/f7RgNe3vdfMRM7HNPIygaw/view?embed',
  },
  {
    name: 'Gold Puff Ball Dress Gold Brocade',
    origin: 'Sister Jane',
    size: '12/14',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGAK3XBcvA/1R8kct9oiio0WwiB5_Dz7A/view?embed',
  },
  {
    name: 'Orange Wide Legged Jumpsuit',
    origin: 'UNKNOWN',
    size: '10',
    category: 'jumpsuits',
    price: 'RENT FROM £12',
    photos:
      'https://www.canva.com/design/DAGFyd4PJho/bWSw_wD1pOrYfhI_Xxuvxg/view?embed',
  },
  {
    name: 'Oversized Pink Short Suit',
    origin: 'UNKNOWN',
    size: '10',
    category: 'jackets',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyTV2Zk4/3pwzNz6tpQ2nUizv5wl0NQ/view?embed',
  },
  {
    name: 'Leopard Print Denim Jacket',
    origin: 'Ganni',
    size: '8',
    category: 'jackets',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyomT4-4/zURE2boZsjQP7x-aH0Qp3g/view?embed',
  },
  {
    name: 'Leopard Midi Dress',
    origin: 'Never Fully Dressed',
    size: '18',
    category: 'Dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyb_FuvM/eJI4tnxJC0D_0NWPCBQVcw/view?embed',
  },
  {
    name: 'Black and Floral',
    origin: 'Ted Baker',
    size: '10',
    category: 'Dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyTS1z6g/EB1DLTEBzfYlGYcm68lc6Q/view?embed',
  },

  {
    name: 'Black One Shoulder Dress',
    origin: 'COS',
    size: '8',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyhPr2LE/rH7cwQcIDE-pdnEXfQjzjg/view?embed',
  },
  {
    name: 'Rare London Gold Grecian Dress',
    origin: 'Rare London',
    size: '14',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFypyf1PY/3thXGqzS2bOls8vHnkIoYQ/view?embed',
  },
  {
    name: 'Coral Dress',
    origin: 'Coast',
    size: '14',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFysttDRs/_IB8lgMy9EQM3yVst1z25Q/view?embed',
  },

  {
    name: 'Floral Slate Blue Lace Dress',
    origin: 'Reiss',
    size: '12',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyrBrIS4/GKakxePiypcusRW8hdJ23w/view?embed',
  },
  {
    name: 'Black Satin Dress',
    origin: 'Coast',
    size: '10',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyicGVbw/pC6JR-8wJXIaSt535K62GA/view?embed',
  },
  {
    name: 'Multi Midi',
    origin: 'Numph',
    size: '8/10',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFydbnpM0/oot8yh-JXJunCzj5sbx50A/view?embed',
  },
  {
    name: 'Blue Sequin Dress',
    origin: 'French Connection',
    size: '10',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyuLs_tQ/uH4owmgK7QgPgMUGxUCxcA/view?embed',
  },
  {
    name: 'Tea Dress',
    origin: 'DKNY',
    size: '10/12',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFydReosc/NA4NkX_aWau1ofgs1KPQ6w/view?embed',
  },
  {
    name: 'Leopard Poplin Wrap Midi',
    origin: 'Ganni',
    size: '8',
    category: 'dresses',
    price: 'RENT FROM £30',
    photos:
      'https://www.canva.com/design/DAGFygytDMw/CcRI2BCFnMHoy5lWlnNzxA/view?embed',
  },
  {
    name: 'Leopard Midi',
    origin: 'Never Fully Dressed',
    size: '18',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyb_FuvM/eJI4tnxJC0D_0NWPCBQVcw/view?embed',
  },
  {
    name: 'Blue Dress',
    origin: 'French Connection',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyTEXdQM/zMvkC9-kOMN7HqOzf3XEoA/view?embed',
  },
  {
    name: 'Silver Tassel Star Detail',
    origin: 'UNKNOWN',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyW9iMXc/nNaMaTAxwZVVrRwaZWU9hg/view?embed',
  },

  {
    name: 'Flapper Dress',
    origin: 'UNKNOWN',
    size: '10',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFydo6eKk/YQJWQI8NU5XXnK9AzZ2rkA/view?embed',
  },

  {
    name: 'Black and Silver Festival Dress',
    origin: 'UNKNOWN',
    size: '10',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFycBLp1A/nZVUWB7xzRwVl2hpq4yJvg/view?embed',
  },
  {
    name: 'Leopard Playsuit',
    origin: 'Vera and Lucy',
    size: '',
    category: 'dresses',
    price: 'RENT FROM £15',
    photos:
      'https://www.canva.com/design/DAGFyd4PJho/bWSw_wD1pOrYfhI_Xxuvxg/view?embed',
  },

  {
    name: 'Navy Puffball Dress',
    origin: 'Reiss',
    size: '8',
    category: 'dresses',
    price: 'RENT FROM £0',
    photos:
      'https://www.canva.com/design/DAGFyRfYlns/S1VZA8HOCI73ITZt-UlF8A/view?embed',
  },
  {
    name: 'Back Lace Dress',
    origin: 'Reiss',
    size: '14',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFye9Jeac/ctK9nSHcUs7t9JiXmFonBw/view?embed',
  },
  {
    name: 'Black Ruched Dress',
    origin: 'John Rocha',
    size: '12',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyaUhqxU/E-IBIihFcSoPHgkOINGPtA/view?embed',
  },
  {
    name: 'Navy Dress',
    origin: 'Vera Wang',
    size: '12',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyWvj3BA/xQX3esRDdWXIBLdB4nRl9w/view?embed',
  },
  {
    name: 'Midi Jacket',
    origin: 'COS',
    size: '8',
    category: 'jackets',
    price: 'RENT FROM £12',
    photos:
      'https://www.canva.com/design/DAGFyYM3NEQ/MxSHUoveTb7PwAUh5OUzOw/view?embed',
  },
  {
    name: 'Pink Alesha Dress',
    origin: 'Never Fully Dressed',
    size: '18',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyfcSNUg/3n2hm4by4yHocFXw7BH6Rw/view?embed',
  },
  {
    name: 'Black Multi Floral',
    origin: 'Karen Millen',
    size: '8',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFySFOy6U/y8r4QH93zfaLJJCzs3fOPw/view?embed',
  },
  {
    name: 'Navy Blazer',
    origin: 'COS',
    size: '8',
    category: 'jackets',
    price: 'RENT FROM £12',
    photos:
      'https://www.canva.com/design/DAGFyaxCXtc/N28QfMwcKo10Rfo_4g7Svg/view?embed',
  },
  {
    name: 'Black Silk Shirt Dress',
    origin: 'Paul Smith',
    size: '12',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyT7s1lI/fWHRSf4-VPyO0hH3QpKIpg/view?embed',
  },
  {
    name: 'Mini Dress',
    origin: 'Kooples',
    size: '6',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFya_h430/7fg1MHEYQoS0VToZsf1uyQ/view?embed',
  },
  {
    name: 'Leopard Dress',
    origin: 'Ganni',
    size: '14',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyeNMxus/0Ze_UKVfXREVnsvOGSEOeA/view?embed',
  },
  {
    name: 'Patterned 2 Piece',
    origin: 'UNKNOWN',
    size: '8',
    category: 'dresses',
    price: 'RENT FROM £12',
    photos:
      'https://www.canva.com/design/DAGFyd1O-Vs/OW37jkjLYXU77JDH2PXF1Q/view?embed',
  },
  {
    name: 'Backless Dress',
    origin: '& Other stories',
    size: '8',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyVZji8Y/SUuAzTaPSwOLZDg4AwZIag/view?embed',
  },
  {
    name: 'Wrap Dress',
    origin: 'Never Fully Dressed',
    size: '12',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyT_5VVo/ZAcMLy_PmZio3z0SPKn7yw/view?embed',
  },
  {
    name: 'Ted Baker Maxi',
    origin: 'Ted Baker',
    size: '12',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyQqb6Bo/j2Iikb4FpKJtSN7vrT4aqg/view?embed',
  },

  {
    name: 'Red Silk Dress',
    origin: 'Kooples',
    size: '6',
    category: 'dresses',
    price: 'RENT FROM £30',
    photos:
      'https://www.canva.com/design/DAGFyRqoOrU/7YTHj3ZjQmjmCpaP9Z-m2A/view?embed',
  },

  {
    name: 'Multi Coloured Dress',
    origin: 'Ted Baker',
    size: '8',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFybA4z-M/VGQtF0bGKmQOujgxNXKqgA/view?embed',
  },
  {
    name: 'Cream and Gold Dress',
    origin: 'Sister Jane',
    size: '10',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFyb9leOA/fuWSiPx5GV9fX1hTKXwADQ/view?embed',
  },
  {
    name: 'Red Mini',
    origin: 'Yarnie',
    size: '10',
    category: 'dresses',
    price: 'RENT FROM £30',
    photos:
      'https://www.canva.com/design/DAGFyW9yKP0/URd0sv6G9ZnDLz4du7h5gw/view?embed',
  },
  {
    name: 'Black Mini',
    origin: 'COS',
    size: '10',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGFye3Sv9k/sYQX6KmYzXmSlczw0UH8FQ/view?embed',
  },
  {
    name: 'Cream Long Backless Dress',
    origin: 'Unknown',
    size: '6',
    category: 'dresses',
    price: 'RENT FROM £12',
    photos:
      'https://www.canva.com/design/DAGFyW4ei88/6EDFWTj-Ohsa1K0LOoMlVQ/view?embed',
  },
  {
    name: 'Peplum top',
    origin: 'Ganni',
    size: '',
    category: 'tops',
    price: 'RENT FROM £15',
    photos:
      'https://www.canva.com/design/DAGGCgYNfw0/NFqflveo_21kMtz7IOSDgQ/view?embed',
  },
  {
    name: 'Leopard Blouse',
    origin: 'Damson Madder',
    size: '',
    category: 'tops',
    price: 'RENT FROM £15',
    photos:
      'https://www.canva.com/design/DAGGCjV3cMw/5d7VssmAePcieJW8rkxW0Q/view?embed',
  },
  {
    name: 'Side Black Button dress',
    origin: '& Other Stories',
    size: '',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGGCi-iRz8/hm8tipp5rbGfZ_3bD0RM6w/view?embed',
  },
  {
    name: 'Vintage Leather Jacket',
    origin: 'All Saints',
    size: '',
    category: 'jackets',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGGChhDMTo/s5M4MOxf3rMjsrWoCcCt6A/view?embed',
  },
  {
    name: 'Blue Silk Dress',
    origin: 'Whistles',
    size: '',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGGCtJR7vA/QsJhWofQoLhsDWNRRCvjzg/view?embed',
  },
  {
    name: 'Sequin Jacket',
    origin: 'Zara',
    size: '',
    category: 'jackets',
    price: 'RENT FROM £12',
    photos:
      'https://www.canva.com/design/DAGGCoWK58s/0xqwOk9mwJE5umAaSpH7Og/view?embed',
  },
  {
    name: 'Black Gathered Dress',
    origin: 'COS',
    size: '',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGGCoxAjZA/Zsy7ntmTnh62Actns66e6g/view?embed',
  },
  {
    name: 'Blue Patterned Dress',
    origin: 'Just',
    size: '',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGGCutjWEc/OjuxYSzv55BrKzdekN6Q2w/view?embed',
  },
  {
    name: 'Polka Dot Halter Dress',
    origin: 'Me & Em',
    size: '',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGGCm8tFbE/DsjbWJzM-jk2iOWZALGYrQ/view?embed',
  },
  {
    name: 'Leopard Ruched Dress',
    origin: 'All Saints',
    size: '',
    category: 'dresses',
    price: 'RENT FROM £20',
    photos:
      'https://www.canva.com/design/DAGGCoxbjcM/B9Fc_UPgN_8ZQ95hqbK2ww/view?embed',
  },
]
module.exports = clothingData
