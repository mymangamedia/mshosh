TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "hfovMax": 120,
  "adjacentPanoramas": [
   {
    "backwardYaw": -106.31,
    "panorama": {
     "hfovMin": 60,
     "hfovMax": 120,
     "adjacentPanoramas": [
      {
       "backwardYaw": -124.27,
       "panorama": {
        "hfovMin": 60,
        "hfovMax": 120,
        "adjacentPanoramas": [
         {
          "backwardYaw": -152.72,
          "panorama": {
           "hfovMin": 60,
           "hfovMax": 120,
           "adjacentPanoramas": [
            {
             "backwardYaw": 43.8,
             "panorama": "this.panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654",
             "class": "AdjacentPanorama",
             "yaw": -152.72,
             "distance": 1
            },
            {
             "backwardYaw": -174.6,
             "panorama": {
              "hfovMin": 60,
              "hfovMax": 120,
              "adjacentPanoramas": [
               {
                "backwardYaw": -104,
                "panorama": "this.panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4",
                "class": "AdjacentPanorama",
                "yaw": -174.6,
                "distance": 1
               },
               {
                "backwardYaw": -171.5,
                "panorama": {
                 "hfovMin": 60,
                 "hfovMax": 120,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": -97.22,
                   "panorama": {
                    "hfovMin": 60,
                    "hfovMax": 120,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": -36.95,
                      "panorama": "this.panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5",
                      "class": "AdjacentPanorama",
                      "yaw": -97.22,
                      "distance": 1
                     }
                    ],
                    "label": "IMG_20210920_164532_00_150",
                    "partial": false,
                    "thumbnailUrl": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_t.jpg",
                    "vfov": 180,
                    "id": "panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3",
                    "class": "Panorama",
                    "hfov": 360,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "image": {
                         "levels": [
                          {
                           "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_tcap0.png",
                           "height": 850,
                           "class": "ImageResourceLevel",
                           "width": 850
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "id": "panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_tcap0",
                        "class": "TripodCapPanoramaOverlay",
                        "hfov": 45,
                        "angle": 0,
                        "inertia": false,
                        "rotate": false
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_030592B7_0830_F132_4175_DB13986EB17E",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_0_HS_0_0_0_map.gif",
                             "height": 147,
                             "class": "ImageResourceLevel",
                             "width": 168
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -7.64,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -97.22,
                          "hfov": 20.05
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_0_HS_0_0.png",
                             "height": 295,
                             "class": "ImageResourceLevel",
                             "width": 337
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 20.05,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -7.64,
                          "yaw": -97.22
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5, this.camera_053ACA09_0830_1BE5_4179_2B918A387624); this.mainPlayList.set('selectedIndex', 5)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ]
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_r_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_f_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_u_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_d_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_l_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_b_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_t.jpg"
                     }
                    ],
                    "pitch": 0
                   },
                   "class": "AdjacentPanorama",
                   "yaw": -36.95,
                   "distance": 1
                  },
                  {
                   "backwardYaw": -54.7,
                   "panorama": {
                    "hfovMin": 60,
                    "hfovMax": 120,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": -141.4,
                      "panorama": "this.panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5",
                      "class": "AdjacentPanorama",
                      "yaw": -54.7,
                      "distance": 1
                     }
                    ],
                    "label": "IMG_20210920_161928_00_148",
                    "partial": false,
                    "thumbnailUrl": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_t.jpg",
                    "vfov": 180,
                    "id": "panorama_0EC4E824_0810_70D6_4191_9B9A569D154F",
                    "class": "Panorama",
                    "hfov": 360,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "image": {
                         "levels": [
                          {
                           "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_tcap0.png",
                           "height": 850,
                           "class": "ImageResourceLevel",
                           "width": 850
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "id": "panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_tcap0",
                        "class": "TripodCapPanoramaOverlay",
                        "hfov": 45,
                        "angle": 0,
                        "inertia": false,
                        "rotate": false
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_0321B6B7_0830_1132_4193_AED747C67419",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_0_HS_0_0_0_map.gif",
                             "height": 120,
                             "class": "ImageResourceLevel",
                             "width": 134
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -5.57,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -54.7,
                          "hfov": 16.02
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_0_HS_0_0.png",
                             "height": 240,
                             "class": "ImageResourceLevel",
                             "width": 268
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 16.02,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -5.57,
                          "yaw": -54.7
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5, this.camera_052949CC_0830_1863_4196_98238598D096); this.mainPlayList.set('selectedIndex', 5)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ]
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_r_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_f_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_u_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_d_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_l_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_b_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_t.jpg"
                     }
                    ],
                    "pitch": 0
                   },
                   "class": "AdjacentPanorama",
                   "yaw": -141.4,
                   "distance": 1
                  },
                  {
                   "backwardYaw": 0.04,
                   "panorama": "this.panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9",
                   "class": "AdjacentPanorama",
                   "yaw": -171.5,
                   "distance": 1
                  },
                  {
                   "backwardYaw": -109.4,
                   "panorama": {
                    "hfovMin": 60,
                    "hfovMax": 120,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 22.5,
                      "panorama": "this.panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5",
                      "class": "AdjacentPanorama",
                      "yaw": -109.4,
                      "distance": 1
                     }
                    ],
                    "label": "IMG_20210920_164933_00_151",
                    "partial": false,
                    "thumbnailUrl": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_t.jpg",
                    "vfov": 180,
                    "id": "panorama_0EC49C95_0810_11F6_4195_D75DD842CF21",
                    "class": "Panorama",
                    "hfov": 360,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "image": {
                         "levels": [
                          {
                           "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_tcap0.png",
                           "height": 850,
                           "class": "ImageResourceLevel",
                           "width": 850
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "id": "panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_tcap0",
                        "class": "TripodCapPanoramaOverlay",
                        "hfov": 45,
                        "angle": 0,
                        "inertia": false,
                        "rotate": false
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_02F8F848_0830_715D_4181_894A8DB97BF1",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_0_HS_0_0_0_map.gif",
                             "height": 130,
                             "class": "ImageResourceLevel",
                             "width": 151
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -6.61,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -109.4,
                          "hfov": 18.04
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_0_HS_0_0.png",
                             "height": 261,
                             "class": "ImageResourceLevel",
                             "width": 302
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 18.04,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -6.61,
                          "yaw": -109.4
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5, this.camera_052539BD_0830_181D_4190_F18183EE99AC); this.mainPlayList.set('selectedIndex', 5)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ]
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_r_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_f_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_u_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_d_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_l_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_b_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_t.jpg"
                     }
                    ],
                    "pitch": 0
                   },
                   "class": "AdjacentPanorama",
                   "yaw": 22.5,
                   "distance": 1
                  }
                 ],
                 "label": "IMG_20210920_142649_00_146",
                 "partial": false,
                 "thumbnailUrl": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_t.jpg",
                 "vfov": 180,
                 "id": "panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5",
                 "class": "Panorama",
                 "hfov": 360,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "image": {
                      "levels": [
                       {
                        "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_tcap0.png",
                        "height": 850,
                        "class": "ImageResourceLevel",
                        "width": 850
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "id": "panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_tcap0",
                     "class": "TripodCapPanoramaOverlay",
                     "hfov": 45,
                     "angle": 0,
                     "inertia": false,
                     "rotate": false
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_0289EB8F_0830_F7D2_4196_04F6EC462F4E",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_0_HS_3_0_0_map.gif",
                          "height": 172,
                          "class": "ImageResourceLevel",
                          "width": 161
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -14.04,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -36.95,
                       "hfov": 18.82
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_0_HS_3_0.png",
                          "height": 344,
                          "class": "ImageResourceLevel",
                          "width": 323
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 18.82,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -14.04,
                       "yaw": -36.95
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3, this.camera_054C9962_0830_1827_419E_53928294D2B6); this.mainPlayList.set('selectedIndex', 7)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_02D9E197_0830_33F2_419C_C098362F48AF",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_0_HS_2_0_0_map.gif",
                          "height": 141,
                          "class": "ImageResourceLevel",
                          "width": 141
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -13,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -141.4,
                       "hfov": 16.49
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_0_HS_2_0.png",
                          "height": 282,
                          "class": "ImageResourceLevel",
                          "width": 282
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 16.49,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -13,
                       "yaw": -141.4
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0EC4E824_0810_70D6_4191_9B9A569D154F, this.camera_054FF971_0830_1825_417F_2C6E2444BA6F); this.mainPlayList.set('selectedIndex', 6)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_02D8DB9C_0830_17F5_4194_43AF8DB1DAC9",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_0_HS_1_0_0_map.gif",
                          "height": 134,
                          "class": "ImageResourceLevel",
                          "width": 141
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -12.18,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 22.5,
                       "hfov": 16.55
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_0_HS_1_0.png",
                          "height": 268,
                          "class": "ImageResourceLevel",
                          "width": 282
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 16.55,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -12.18,
                       "yaw": 22.5
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0EC49C95_0810_11F6_4195_D75DD842CF21, this.camera_05582990_0830_18E3_4157_39E0B8B4EED0); this.mainPlayList.set('selectedIndex', 8)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_030AE9AB_0830_13D2_4182_94033BA855E0",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_0_HS_0_0_0_map.gif",
                          "height": 134,
                          "class": "ImageResourceLevel",
                          "width": 148
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -22.5,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -171.5,
                       "hfov": 16.47
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_0_HS_0_0.png",
                          "height": 268,
                          "class": "ImageResourceLevel",
                          "width": 297
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 16.47,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -22.5,
                       "yaw": -171.5
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9, this.camera_05540981_0830_18E5_4193_070DB42CE637); this.mainPlayList.set('selectedIndex', 4)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ]
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_r.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_f.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_u.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_d.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_t.jpg"
                  }
                 ],
                 "pitch": 0
                },
                "class": "AdjacentPanorama",
                "yaw": 0.04,
                "distance": 1
               }
              ],
              "label": "IMG_20210920_142553_00_145",
              "partial": false,
              "thumbnailUrl": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_t.jpg",
              "vfov": 180,
              "id": "panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9",
              "class": "Panorama",
              "hfov": 360,
              "frames": [
               {
                "overlays": [
                 {
                  "image": {
                   "levels": [
                    {
                     "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_tcap0.png",
                     "height": 850,
                     "class": "ImageResourceLevel",
                     "width": 850
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "id": "panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_tcap0",
                  "class": "TripodCapPanoramaOverlay",
                  "hfov": 45,
                  "angle": 0,
                  "inertia": false,
                  "rotate": false
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_02867713_0830_30F2_4194_71FCFAA5850E",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_0_HS_2_0_0_map.gif",
                       "height": 103,
                       "class": "ImageResourceLevel",
                       "width": 117
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -21.88,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 0.04,
                    "hfov": 13.09
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_0_HS_2_0.png",
                       "height": 206,
                       "class": "ImageResourceLevel",
                       "width": 235
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 13.09,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -21.88,
                    "yaw": 0.04
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5, this.camera_05440935_0830_182D_4197_E00913CB9E16); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_0314B1DB_0830_7372_4190_7DC0999E2D90",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_0_HS_1_0_0_map.gif",
                       "height": 103,
                       "class": "ImageResourceLevel",
                       "width": 117
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -14.04,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -151.48,
                    "hfov": 13.69
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_0_HS_1_0.png",
                       "height": 206,
                       "class": "ImageResourceLevel",
                       "width": 235
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 13.69,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -14.04,
                    "yaw": -151.48
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_03BEAF9F_0830_2FF2_4191_A746401EB620",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_0_HS_0_0_0_map.gif",
                       "height": 103,
                       "class": "ImageResourceLevel",
                       "width": 117
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -13.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -174.6,
                    "hfov": 13.71
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_0_HS_0_0.png",
                       "height": 206,
                       "class": "ImageResourceLevel",
                       "width": 235
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 13.71,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -13.62,
                    "yaw": -174.6
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4, this.camera_05417926_0830_182F_4197_9583A33B2572); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ]
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_t.jpg"
               }
              ],
              "pitch": 0
             },
             "class": "AdjacentPanorama",
             "yaw": -104,
             "distance": 1
            }
           ],
           "label": "IMG_20210920_142232_00_144",
           "partial": false,
           "thumbnailUrl": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_t.jpg",
           "vfov": 180,
           "id": "panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4",
           "class": "Panorama",
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "image": {
                "levels": [
                 {
                  "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_tcap0.png",
                  "height": 850,
                  "class": "ImageResourceLevel",
                  "width": 850
                 }
                ],
                "class": "ImageResource"
               },
               "id": "panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_tcap0",
               "class": "TripodCapPanoramaOverlay",
               "hfov": 45,
               "angle": 0,
               "inertia": false,
               "rotate": false
              },
              {
               "useHandCursor": true,
               "id": "overlay_02B48204_0830_70D6_419A_A9A4A1603561",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_0_HS_1_0_0_map.gif",
                    "height": 103,
                    "class": "ImageResourceLevel",
                    "width": 117
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -12.39,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -104,
                 "hfov": 13.78
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_0_HS_1_0.png",
                    "height": 206,
                    "class": "ImageResourceLevel",
                    "width": 235
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 13.78,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -12.39,
                 "yaw": -104
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9, this.camera_053639F8_0830_1823_419A_BB156DDF1546); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_0361138E_0810_77D2_418F_B747966E141B",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_0_HS_0_0_0_map.gif",
                    "height": 103,
                    "class": "ImageResourceLevel",
                    "width": 117
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -24.77,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -152.72,
                 "hfov": 12.81
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_0_HS_0_0.png",
                    "height": 206,
                    "class": "ImageResourceLevel",
                    "width": 235
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 12.81,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -24.77,
                 "yaw": -152.72
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654, this.camera_053239E9_0830_1825_418A_D73BF45999EA); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "top": {
              "levels": [
               {
                "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "back": {
              "levels": [
               {
                "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_t.jpg"
            }
           ],
           "pitch": 0
          },
          "class": "AdjacentPanorama",
          "yaw": 43.8,
          "distance": 1
         },
         {
          "backwardYaw": -60.89,
          "panorama": "this.panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB",
          "class": "AdjacentPanorama",
          "yaw": -124.27,
          "distance": 1
         }
        ],
        "label": "IMG_20210920_141852_00_142",
        "partial": false,
        "thumbnailUrl": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_t.jpg",
        "vfov": 180,
        "id": "panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654",
        "class": "Panorama",
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "image": {
             "levels": [
              {
               "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_tcap0.png",
               "height": 850,
               "class": "ImageResourceLevel",
               "width": 850
              }
             ],
             "class": "ImageResource"
            },
            "id": "panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_tcap0",
            "class": "TripodCapPanoramaOverlay",
            "hfov": 45,
            "angle": 0,
            "inertia": false,
            "rotate": false
           },
           {
            "useHandCursor": true,
            "id": "overlay_024F5A0C_0830_10D6_4184_4B7B97F01E5A",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_0_HS_1_0_0_map.gif",
                 "height": 103,
                 "class": "ImageResourceLevel",
                 "width": 117
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -34.27,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 43.8,
              "hfov": 11.66
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_0_HS_1_0.png",
                 "height": 206,
                 "class": "ImageResourceLevel",
                 "width": 235
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 11.66,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -34.27,
              "yaw": 43.8
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4, this.camera_05464944_0830_1863_4184_FA99D244BD8A); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_034D4DD6_0810_1372_4194_12C423176BF3",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_0_HS_0_0_0_map.gif",
                 "height": 123,
                 "class": "ImageResourceLevel",
                 "width": 116
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -7.43,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -124.27,
              "hfov": 13.92
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_0_HS_0_0.png",
                 "height": 247,
                 "class": "ImageResourceLevel",
                 "width": 233
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 13.92,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -7.43,
              "yaw": -124.27
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB, this.camera_05491953_0830_1865_4194_549C1F6F4A22); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_04395490_0870_08E3_419C_25A69BE62C12",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_0_HS_2_1_0_map.gif",
                 "height": 138,
                 "class": "ImageResourceLevel",
                 "width": 200
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -17.1,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 88.95,
              "hfov": 30.67
             }
            ],
            "items": [
             {
              "roll": 0,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_0_HS_2_0.png",
                 "height": 363,
                 "class": "ImageResourceLevel",
                 "width": 523
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 30.67,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -17.1,
              "yaw": 88.95
             }
            ],
            "areas": [
             {
              "toolTip": "Watch Me!",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 9); this.MainViewerVideoPlayer.play()",
              "displayTooltipInTouchScreens": true
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "top": {
           "levels": [
            {
             "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "back": {
           "levels": [
            {
             "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_t.jpg"
         }
        ],
        "pitch": 0
       },
       "class": "AdjacentPanorama",
       "yaw": -60.89,
       "distance": 1
      },
      {
       "backwardYaw": -7.77,
       "panorama": "this.panorama_0F72D947_0811_F352_419C_633B70099369",
       "class": "AdjacentPanorama",
       "yaw": -106.31,
       "distance": 1
      }
     ],
     "label": "IMG_20210920_140139_00_140",
     "partial": false,
     "thumbnailUrl": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_t.jpg",
     "vfov": 180,
     "id": "panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB",
     "class": "Panorama",
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "image": {
          "levels": [
           {
            "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_tcap0.png",
            "height": 850,
            "class": "ImageResourceLevel",
            "width": 850
           }
          ],
          "class": "ImageResource"
         },
         "id": "panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_tcap0",
         "class": "TripodCapPanoramaOverlay",
         "hfov": 45,
         "angle": 0,
         "inertia": false,
         "rotate": false
        },
        {
         "useHandCursor": true,
         "id": "overlay_026F09DD_0830_3377_419D_60C72D0280F6",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_0_HS_1_0_0_map.gif",
              "height": 116,
              "class": "ImageResourceLevel",
              "width": 127
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.91,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -60.89,
           "hfov": 15.05
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_0_HS_1_0.png",
              "height": 233,
              "class": "ImageResourceLevel",
              "width": 254
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 15.05,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -9.91,
           "yaw": -60.89
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654, this.camera_055C599F_0830_181D_4173_A6BE2C86FBC7); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_03A1BC8F_0810_11D2_4131_62F7CEA54518",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_0_HS_0_0_0_map.gif",
              "height": 135,
              "class": "ImageResourceLevel",
              "width": 141
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -33.32,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -106.31,
           "hfov": 14.14
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_0_HS_0_0.png",
              "height": 271,
              "class": "ImageResourceLevel",
              "width": 282
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 14.14,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -33.32,
           "yaw": -106.31
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0F72D947_0811_F352_419C_633B70099369, this.camera_052099AE_0830_183F_4197_2700A47B1D29); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_043B09FE_0810_1332_4191_0CC45A0CF180",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_0_HS_2_0_0_map.gif",
              "height": 103,
              "class": "ImageResourceLevel",
              "width": 121
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 10.32,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -45.99,
           "hfov": 14.29
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_0_HS_2_0.png",
              "height": 206,
              "class": "ImageResourceLevel",
              "width": 242
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 14.29,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 10.32,
           "yaw": -45.99
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "var newWindow = window.open(\"https://wpack.net\", \"_blank\"); newWindow.focus()",
           "class": "HotspotPanoramaOverlayArea"
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_r_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_f_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "top": {
        "levels": [
         {
          "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_u_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_d_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_l_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "back": {
        "levels": [
         {
          "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_b_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_t.jpg"
      }
     ],
     "pitch": 0
    },
    "class": "AdjacentPanorama",
    "yaw": -7.77,
    "distance": 1
   }
  ],
  "label": "IMG_20210920_140021_00_139",
  "partial": false,
  "thumbnailUrl": "media/panorama_0F72D947_0811_F352_419C_633B70099369_t.jpg",
  "vfov": 180,
  "id": "panorama_0F72D947_0811_F352_419C_633B70099369",
  "class": "Panorama",
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "image": {
       "levels": [
        {
         "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_tcap0.png",
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850
        }
       ],
       "class": "ImageResource"
      },
      "id": "panorama_0F72D947_0811_F352_419C_633B70099369_tcap0",
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "angle": 0,
      "inertia": false,
      "rotate": false
     },
     {
      "useHandCursor": true,
      "id": "overlay_02029014_0810_30F6_4186_45680AB6B859",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_0_HS_0_0_0_map.gif",
           "height": 49,
           "class": "ImageResourceLevel",
           "width": 49
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.63,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -7.77,
        "hfov": 5.8
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_0_HS_0_0.png",
           "height": 98,
           "class": "ImageResourceLevel",
           "width": 98
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.8,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -11.63,
        "yaw": -7.77
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB, this.camera_052D89DA_0830_1867_4198_8A29CBA90F6B); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "top": {
     "levels": [
      {
       "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "back": {
     "levels": [
      {
       "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_0F72D947_0811_F352_419C_633B70099369_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_0F72D947_0811_F352_419C_633B70099369_t.jpg"
   }
  ],
  "pitch": 0
 },
 {
  "viewerArea": "this.MainViewer",
  "buttonMoveDown": {
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_rollover.png",
   "transparencyActive": false,
   "paddingBottom": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingRight": 0,
   "minHeight": 0,
   "width": 30,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "height": 30,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_pressed.png",
   "minWidth": 0
  },
  "buttonPlayRight": {
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "transparencyActive": false,
   "paddingBottom": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingRight": 0,
   "minHeight": 0,
   "width": 38,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "height": 38,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "minWidth": 0
  },
  "touchControlMode": "drag_acceleration",
  "buttonRestart": {
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "transparencyActive": false,
   "paddingBottom": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingRight": 0,
   "minHeight": 0,
   "width": 38,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "height": 38,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "minWidth": 0
  },
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonZoomIn": {
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "transparencyActive": false,
   "paddingBottom": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingRight": 0,
   "minHeight": 0,
   "width": 30,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "height": 30,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "minWidth": 0
  },
  "buttonPlayLeft": {
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "transparencyActive": false,
   "paddingBottom": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingRight": 0,
   "minHeight": 0,
   "width": 38,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "height": 38,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "minWidth": 0
  },
  "buttonMoveUp": {
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_rollover.png",
   "transparencyActive": false,
   "paddingBottom": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingRight": 0,
   "minHeight": 0,
   "width": 30,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "height": 30,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_pressed.png",
   "minWidth": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "buttonMoveRight": {
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_rollover.png",
   "transparencyActive": false,
   "paddingBottom": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingRight": 0,
   "minHeight": 0,
   "width": 30,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "height": 30,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_pressed.png",
   "minWidth": 0
  },
  "displayPlaybackBar": true,
  "buttonZoomOut": {
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "transparencyActive": false,
   "paddingBottom": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingRight": 0,
   "minHeight": 0,
   "width": 30,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "height": 30,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "minWidth": 0
  },
  "buttonMoveLeft": {
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_rollover.png",
   "transparencyActive": false,
   "paddingBottom": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingRight": 0,
   "minHeight": 0,
   "width": 30,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "height": 30,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_pressed.png",
   "minWidth": 0
  }
 },
 {
  "id": "panorama_0F72D947_0811_F352_419C_633B70099369_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -4.13,
   "class": "PanoramaCameraPosition",
   "yaw": -4.54
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB",
 {
  "id": "panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -12.8,
   "class": "PanoramaCameraPosition",
   "yaw": -61.1
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654",
 {
  "id": "panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -21.88,
   "class": "PanoramaCameraPosition",
   "yaw": 40.87
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4",
 {
  "id": "panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -4.54,
   "class": "PanoramaCameraPosition",
   "yaw": -99.91
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9",
 {
  "id": "panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -16.1,
   "class": "PanoramaCameraPosition",
   "yaw": -0.83
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5",
 {
  "id": "panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -14.04,
   "class": "PanoramaCameraPosition",
   "yaw": -143.67
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0EC4E824_0810_70D6_4191_9B9A569D154F",
 {
  "id": "panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -9.08,
   "class": "PanoramaCameraPosition",
   "yaw": -55.73
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3",
 {
  "id": "panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -11.56,
   "class": "PanoramaCameraPosition",
   "yaw": -95.78
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0EC49C95_0810_11F6_4195_D75DD842CF21",
 {
  "id": "panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -11.56,
   "class": "PanoramaCameraPosition",
   "yaw": -106.1
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "scaleMode": "fit_inside",
  "label": "story_1632151257578_urbanstyle",
  "thumbnailUrl": "media/video_04D67F60_0870_1823_4176_E7085851C404_t.jpg",
  "height": 1080,
  "id": "video_04D67F60_0870_1823_4176_E7085851C404",
  "class": "Video",
  "width": 1920,
  "video": {
   "mp4Url": "media/video_04D67F60_0870_1823_4176_E7085851C404.mp4",
   "height": 1080,
   "class": "VideoResource",
   "width": 1920
  }
 },
 {
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "class": "VideoPlayer",
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440"
 },
 {
  "items": [
   {
    "media": "this.panorama_0F72D947_0811_F352_419C_633B70099369",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_0F72D947_0811_F352_419C_633B70099369_camera"
   },
   {
    "media": "this.panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_camera"
   },
   {
    "media": "this.panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_camera"
   },
   {
    "media": "this.panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_camera"
   },
   {
    "media": "this.panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_camera"
   },
   {
    "media": "this.panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_camera"
   },
   {
    "media": "this.panorama_0EC4E824_0810_70D6_4191_9B9A569D154F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_camera"
   },
   {
    "media": "this.panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_camera"
   },
   {
    "media": "this.panorama_0EC49C95_0810_11F6_4195_D75DD842CF21",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_camera"
   },
   {
    "media": "this.video_04D67F60_0870_1823_4176_E7085851C404",
    "start": "this.changeBackgroundWhilePlay(this.mainPlayList, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 9, this.video_04D67F60_0870_1823_4176_E7085851C404)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_0F72D947_0811_F352_419C_633B70099369",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "camera": "this.panorama_0F72D947_0811_F352_419C_633B70099369_camera"
   },
   {
    "media": "this.panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "camera": "this.panorama_0EC6B50A_0810_10D2_4188_2AC62B751FFB_camera"
   },
   {
    "media": "this.panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
    "camera": "this.panorama_0EC4EF65_0810_2F56_4194_5A170ECC2654_camera"
   },
   {
    "media": "this.panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "camera": "this.panorama_0EC4C9AD_0810_33D7_4196_05119C563CC4_camera"
   },
   {
    "media": "this.panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "camera": "this.panorama_0EC4C3E8_0810_175D_4195_524C8CBD1DC9_camera"
   },
   {
    "media": "this.panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "camera": "this.panorama_0EC4EDEC_0810_1356_4199_A734B8D4F7E5_camera"
   },
   {
    "media": "this.panorama_0EC4E824_0810_70D6_4191_9B9A569D154F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
    "camera": "this.panorama_0EC4E824_0810_70D6_4191_9B9A569D154F_camera"
   },
   {
    "media": "this.panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
    "camera": "this.panorama_0EC482C3_0810_1152_419D_CE5648CBAFA3_camera"
   },
   {
    "media": "this.panorama_0EC49C95_0810_11F6_4195_D75DD842CF21",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)",
    "camera": "this.panorama_0EC49C95_0810_11F6_4195_D75DD842CF21_camera"
   },
   {
    "media": "this.video_04D67F60_0870_1823_4176_E7085851C404",
    "start": "this.changeBackgroundWhilePlay(this.thumbnaillist5245_playlist, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.thumbnaillist5245_playlist, 9, this.video_04D67F60_0870_1823_4176_E7085851C404)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 0)"
   }
  ],
  "id": "thumbnaillist5245_playlist",
  "class": "PlayList"
 },
 {
  "id": "camera_05417926_0830_182F_4197_9583A33B2572",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 76
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_05440935_0830_182D_4197_E00913CB9E16",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 8.5
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_05464944_0830_1863_4184_FA99D244BD8A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 27.28
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_05491953_0830_1865_4194_549C1F6F4A22",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 119.11
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_054C9962_0830_1827_419E_53928294D2B6",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 82.78
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_054FF971_0830_1825_417F_2C6E2444BA6F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 125.3
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_05540981_0830_18E5_4193_070DB42CE637",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -179.96
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_05582990_0830_18E3_4157_39E0B8B4EED0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 70.6
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_055C599F_0830_181D_4173_A6BE2C86FBC7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 55.73
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_052099AE_0830_183F_4197_2700A47B1D29",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 172.23
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_052539BD_0830_181D_4190_F18183EE99AC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -157.5
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_052949CC_0830_1863_4196_98238598D096",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 38.6
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_052D89DA_0830_1867_4198_8A29CBA90F6B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 73.69
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_053239E9_0830_1825_418A_D73BF45999EA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -136.2
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_053639F8_0830_1823_419A_BB156DDF1546",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 5.4
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_053ACA09_0830_1BE5_4179_2B918A387624",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 143.05
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "audio_0FA110B4_0810_1135_418B_0225FFE14E16",
  "class": "MediaAudio",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_0FA110B4_0810_1135_418B_0225FFE14E16.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_0FA110B4_0810_1135_418B_0225FFE14E16.mp3"
  }
 }
], "children": [
 {
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeight": 20,
  "top": 77,
  "bottom": 92,
  "toolTipPaddingRight": 6,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "playbackBarBorderColor": "#AAAAAA",
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "paddingTop": 0,
  "toolTipShadowSpread": 0,
  "progressBarBorderRadius": 4,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "shadow": false,
  "toolTipFontColor": "#606060",
  "progressBorderRadius": 4,
  "toolTipFontFamily": "Arial",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 4,
  "toolTipBorderSize": 1,
  "minHeight": 50,
  "toolTipPaddingTop": 4,
  "toolTipFontStyle": "normal",
  "playbackBarProgressBorderColor": "#000000",
  "id": "MainViewer",
  "playbackBarHeadBorderRadius": 0,
  "minWidth": 100,
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 10,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "paddingLeft": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontSize": 12,
  "class": "ViewerArea",
  "playbackBarBorderSize": 2,
  "playbackBarBackgroundOpacity": 1,
  "toolTipOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "toolTipFontWeight": "normal",
  "progressRight": 10,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 30,
  "paddingBottom": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBottom": 1,
  "left": 0,
  "progressBarOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "paddingRight": 0,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "right": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBottom": 10,
  "progressHeight": 20,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBorderSize": 2,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ]
 },
 {
  "layout": "vertical",
  "itemLabelGap": 5,
  "scrollBarColor": "#FFFFFF",
  "minWidth": 0,
  "itemBorderRadius": 0,
  "paddingLeft": 20,
  "playList": "this.thumbnaillist5245_playlist",
  "borderRadius": 5,
  "selectedItemLabelFontWeight": "bold",
  "itemBackgroundColor": [],
  "class": "ThumbnailList",
  "bottom": 100,
  "itemThumbnailWidth": 100,
  "itemThumbnailShadowOpacity": 0.8,
  "itemThumbnailScaleMode": "fit_outside",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "top": 84,
  "itemThumbnailHeight": 75,
  "scrollBarWidth": 10,
  "itemThumbnailShadowColor": "#000000",
  "verticalAlign": "top",
  "itemLabelFontSize": 14,
  "paddingTop": 10,
  "itemPaddingTop": 3,
  "scrollBarMargin": 2,
  "maxHeight": 800,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemThumbnailBorderRadius": 5,
  "itemLabelFontFamily": "Arial",
  "itemThumbnailOpacity": 1,
  "maxWidth": 800,
  "itemThumbnailShadowVerticalLength": 3,
  "itemPaddingLeft": 3,
  "itemBackgroundOpacity": 0,
  "right": 9,
  "itemBackgroundColorRatios": [],
  "shadow": false,
  "itemThumbnailShadow": true,
  "paddingBottom": 10,
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowSpread": 1,
  "backgroundColorDirection": "vertical",
  "itemThumbnailShadowBlurRadius": 4,
  "itemLabelTextDecoration": "none",
  "itemVerticalAlign": "middle",
  "itemPaddingRight": 3,
  "paddingRight": 20,
  "gap": 10,
  "backgroundColor": [
   "#000000"
  ],
  "itemMode": "normal",
  "itemLabelPosition": "bottom",
  "itemLabelFontWeight": "normal",
  "horizontalAlign": "left",
  "minHeight": 0,
  "itemLabelHorizontalAlign": "center",
  "id": "thumbnaillist5245",
  "itemPaddingBottom": 3,
  "itemLabelFontColor": "#FFFFFF",
  "backgroundOpacity": 0.2,
  "scrollBarOpacity": 0.5,
  "itemLabelFontStyle": "normal",
  "backgroundColorRatios": [
   0
  ],
  "itemHorizontalAlign": "center",
  "itemOpacity": 1
 },
 {
  "fontSize": 40,
  "paddingLeft": 0,
  "textDecoration": "none",
  "class": "Label",
  "borderSize": 0,
  "fontStyle": "normal",
  "top": 14,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "fontWeight": "bold",
  "fontColor": "#666666",
  "shadow": false,
  "paddingBottom": 0,
  "left": 9,
  "paddingRight": 0,
  "minHeight": 16,
  "text": "My Virtual Tour",
  "width": 292,
  "horizontalAlign": "center",
  "backgroundOpacity": 0,
  "height": 49,
  "id": "label4056",
  "borderRadius": 0,
  "fontFamily": "Arial",
  "minWidth": 30
 },
 {
  "scrollBarOpacity": 0.5,
  "gap": 6,
  "children": [
   {
    "scrollBarOpacity": 0.5,
    "gap": 10,
    "children": [
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
     {
      "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C.png",
      "paddingLeft": 0,
      "class": "IconButton",
      "borderSize": 0,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "mode": "toggle",
      "transparencyActive": false,
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "paddingRight": 0,
      "minHeight": 0,
      "width": 38,
      "horizontalAlign": "center",
      "backgroundOpacity": 0,
      "height": 38,
      "id": "IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
      "borderRadius": 0,
      "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C_pressed.png",
      "minWidth": 0
     },
     {
      "scrollBarOpacity": 0.5,
      "gap": 5,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
       {
        "scrollBarOpacity": 0.5,
        "gap": 10,
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2"
        ],
        "paddingLeft": 0,
        "height": "100%",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "scrollBarWidth": 10,
        "verticalAlign": "middle",
        "layout": "vertical",
        "paddingTop": 0,
        "scrollBarMargin": 2,
        "overflow": "hidden",
        "shadow": false,
        "paddingBottom": 0,
        "backgroundColorDirection": "vertical",
        "scrollBarColor": "#000000",
        "paddingRight": 0,
        "minHeight": 20,
        "backgroundColor": [
         "#FFFFFF"
        ],
        "width": 47,
        "horizontalAlign": "center",
        "backgroundOpacity": 1,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "borderRadius": 0,
        "backgroundColorRatios": [
         0
        ],
        "minWidth": 20
       },
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894"
      ],
      "paddingLeft": 0,
      "height": "100%",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "scrollBarWidth": 10,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "paddingTop": 0,
      "scrollBarMargin": 2,
      "overflow": "hidden",
      "shadow": false,
      "paddingBottom": 0,
      "backgroundColorDirection": "vertical",
      "scrollBarColor": "#000000",
      "paddingRight": 0,
      "minHeight": 20,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "width": 133,
      "horizontalAlign": "center",
      "backgroundOpacity": 1,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "borderRadius": 0,
      "backgroundColorRatios": [
       0
      ],
      "minWidth": 20
     },
     {
      "scrollBarOpacity": 0.5,
      "gap": 10,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "paddingLeft": 0,
      "height": "100%",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "scrollBarWidth": 10,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "paddingTop": 0,
      "scrollBarMargin": 2,
      "overflow": "hidden",
      "shadow": false,
      "paddingBottom": 0,
      "backgroundColorDirection": "vertical",
      "scrollBarColor": "#000000",
      "paddingRight": 0,
      "minHeight": 20,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "width": 85,
      "horizontalAlign": "center",
      "backgroundOpacity": 1,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "borderRadius": 0,
      "backgroundColorRatios": [
       0
      ],
      "minWidth": 20
     }
    ],
    "paddingLeft": 0,
    "height": "93.478%",
    "contentOpaque": false,
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "layout": "horizontal",
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "overflow": "hidden",
    "shadow": false,
    "paddingBottom": 0,
    "backgroundColorDirection": "vertical",
    "paddingRight": 0,
    "minHeight": 20,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "width": 468,
    "horizontalAlign": "center",
    "backgroundOpacity": 1,
    "scrollBarColor": "#000000",
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "borderRadius": 0,
    "backgroundColorRatios": [
     0
    ],
    "minWidth": 468
   }
  ],
  "paddingLeft": 0,
  "contentOpaque": false,
  "width": "100%",
  "class": "Container",
  "bottom": "0%",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "layout": "horizontal",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "shadow": false,
  "paddingBottom": 0,
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "minHeight": 1,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "horizontalAlign": "center",
  "backgroundOpacity": 0.3,
  "height": 92,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 1
 }
], 
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scripts": {
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){    return window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "unregisterKey": function(key){    delete window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "existsKey": function(key){    return key in window; },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "registerKey": function(key, value){    window[key] = value; },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); }
 },
 "contentOpaque": false,
 "paddingLeft": 0,
 "height": "100%",
 "start": "this.playAudioList([this.audio_0FA110B4_0810_1135_418B_0225FFE14E16]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "width": "100%",
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "scrollBarWidth": 10,
 "buttonToggleMute": "this.IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "layout": "absolute",
 "overflow": "visible",
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "minHeight": 20,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "id": "rootPlayer",
 "borderRadius": 0,
 "minWidth": 20
})