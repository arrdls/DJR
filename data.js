var APP_DATA = {
  "scenes": [
    {
      "id": "0-perspective",
      "name": "Perspective",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.030444704670227196,
        "pitch": -0.10535209433409065,
        "fov": 1.1315299782525086
      },
      "linkHotspots": [
        {
          "yaw": -0.48895883424659203,
          "pitch": 0.2480634435791771,
          "rotation": 0,
          "target": "1-driveway"
        },
        {
          "yaw": -0.38227868671903487,
          "pitch": 0.12465469200164137,
          "rotation": 0,
          "target": "2-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-driveway",
      "name": "Driveway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.12165688037343081,
          "pitch": 0.10494181104294853,
          "rotation": 0,
          "target": "2-gate"
        },
        {
          "yaw": 2.4778750882607703,
          "pitch": 0.14371326211299262,
          "rotation": 0,
          "target": "0-perspective"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-gate",
      "name": "Gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.547751047427699,
          "pitch": 0.2593307022918463,
          "rotation": 1.5707963267948966,
          "target": "1-driveway"
        },
        {
          "yaw": -0.40150768542653026,
          "pitch": -0.030567047213361676,
          "rotation": 4.71238898038469,
          "target": "3-main-door"
        },
        {
          "yaw": -1.5655074710020571,
          "pitch": -0.038032345866815476,
          "rotation": 0,
          "target": "8-lanai"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-main-door",
      "name": "Main Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2398156906457185,
          "pitch": 0.2647697915064704,
          "rotation": 0,
          "target": "4-foyer"
        },
        {
          "yaw": -0.7825062190781935,
          "pitch": 0.3440100656784484,
          "rotation": 0,
          "target": "1-driveway"
        },
        {
          "yaw": -0.4823838446844668,
          "pitch": 0.33982422121843747,
          "rotation": 3.141592653589793,
          "target": "2-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6388431872553468,
          "pitch": 0.16786099462689386,
          "rotation": 0,
          "target": "3-main-door"
        },
        {
          "yaw": 0.1078333318278748,
          "pitch": 0.37007383475866007,
          "rotation": 0,
          "target": "5-living"
        },
        {
          "yaw": -0.022653767954720294,
          "pitch": 0.022647951727510218,
          "rotation": 0,
          "target": "6-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8171952504763347,
          "pitch": 0.06850760356339691,
          "rotation": 9.42477796076938,
          "target": "4-foyer"
        },
        {
          "yaw": -1.3972189624489797,
          "pitch": 0.07426648879530262,
          "rotation": 0,
          "target": "6-dining"
        },
        {
          "yaw": -1.9701021266171637,
          "pitch": -0.15052297128424286,
          "rotation": 0,
          "target": "10-2f-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5342323211596458,
          "pitch": 0.09719537007418566,
          "rotation": 0,
          "target": "9-kitchen"
        },
        {
          "yaw": -1.7716922944555797,
          "pitch": 0.1293622843041078,
          "rotation": 0,
          "target": "7-guest-room"
        },
        {
          "yaw": -3.011847493758765,
          "pitch": 0.07559971294737267,
          "rotation": 0,
          "target": "8-lanai"
        },
        {
          "yaw": 2.097014842029072,
          "pitch": -0.3029013600125108,
          "rotation": 0,
          "target": "10-2f-hallway"
        },
        {
          "yaw": 1.485951362035724,
          "pitch": 0.09195164058339778,
          "rotation": 0,
          "target": "5-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-guest-room",
      "name": "Guest Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7035340981153926,
          "pitch": 0.2901872108373418,
          "rotation": 0,
          "target": "6-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-lanai",
      "name": "Lanai",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.5963617476240124,
        "pitch": 0.005735145395666663,
        "fov": 1.6580943355091502
      },
      "linkHotspots": [
        {
          "yaw": 1.5586027143573737,
          "pitch": 0.06854138443278046,
          "rotation": 1.5707963267948966,
          "target": "17-rear"
        },
        {
          "yaw": 3.069563488153312,
          "pitch": 0.10377060077899536,
          "rotation": 0,
          "target": "6-dining"
        },
        {
          "yaw": -1.5096645108794942,
          "pitch": 0.1550363438374891,
          "rotation": 0,
          "target": "2-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3048785330518129,
          "pitch": 0.08623653632581885,
          "rotation": 0,
          "target": "6-dining"
        },
        {
          "yaw": 2.858005284276352,
          "pitch": 0.22052969614319906,
          "rotation": 0,
          "target": "18-service-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-2f-hallway",
      "name": "2F Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2550790766129225,
          "pitch": 0.7683371256751155,
          "rotation": 3.141592653589793,
          "target": "6-dining"
        },
        {
          "yaw": -2.200863971781935,
          "pitch": 0.47520777177529006,
          "rotation": 15.707963267948973,
          "target": "5-living"
        },
        {
          "yaw": 0.9893881429527731,
          "pitch": 0.16455611716799723,
          "rotation": 0,
          "target": "11-master-bedroom"
        },
        {
          "yaw": 3.1259653293648517,
          "pitch": 0.0886980138202027,
          "rotation": 0,
          "target": "13-study-area"
        },
        {
          "yaw": -1.0371768455078474,
          "pitch": -0.3883847173284938,
          "rotation": 0,
          "target": "14-3rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.25607377839711987,
          "pitch": 0.060810516628716726,
          "rotation": 0,
          "target": "10-2f-hallway"
        },
        {
          "yaw": -0.593540074403208,
          "pitch": 0.09570568994604045,
          "rotation": 0,
          "target": "12-wic"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-wic",
      "name": "WIC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3433130800650677,
          "pitch": 0.2966314717880607,
          "rotation": 0,
          "target": "11-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-study-area",
      "name": "Study Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.41307575611908653,
          "pitch": 0.18994523442941968,
          "rotation": 0,
          "target": "10-2f-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-3rd-floor-hallway",
      "name": "3rd Floor Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08514541342175441,
          "pitch": 0.09851334734662487,
          "rotation": 0,
          "target": "15-bedroom-2"
        },
        {
          "yaw": 1.7649545358559013,
          "pitch": 0.2645602552571198,
          "rotation": 1.5707963267948966,
          "target": "16-family-area"
        },
        {
          "yaw": -1.3145502547514223,
          "pitch": 0.614851751540753,
          "rotation": 3.141592653589793,
          "target": "10-2f-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3250265556373488,
          "pitch": 0.3630047505947118,
          "rotation": 0,
          "target": "14-3rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-family-area",
      "name": "Family Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5503667734085838,
          "pitch": 0.12324068587250636,
          "rotation": 4.71238898038469,
          "target": "14-3rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-rear",
      "name": "Rear",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.478426021107067,
          "pitch": 0.10834705560929692,
          "rotation": 1.5707963267948966,
          "target": "19-maids-room"
        },
        {
          "yaw": -0.02455690128927479,
          "pitch": 0.09021230552347959,
          "rotation": 0,
          "target": "18-service-kitchen"
        },
        {
          "yaw": 3.074160803542684,
          "pitch": 0.16742287648020948,
          "rotation": 4.71238898038469,
          "target": "8-lanai"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-service-kitchen",
      "name": "Service Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5096423595977093,
          "pitch": 0.08113222964613342,
          "rotation": 0,
          "target": "9-kitchen"
        },
        {
          "yaw": 0.638069818443995,
          "pitch": 0.14504155005187513,
          "rotation": 10.995574287564278,
          "target": "19-maids-room"
        },
        {
          "yaw": 0.9361815654013945,
          "pitch": 0.12234481715843515,
          "rotation": 0,
          "target": "17-rear"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-maids-room",
      "name": "Maids Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4814478418382695,
          "pitch": 0.2556889516134362,
          "rotation": 0,
          "target": "18-service-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "DJR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
