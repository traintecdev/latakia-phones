$(document).ready(function () {


  var oldNumber = $('#inputNumber');
  var resultNumber = $('#resultNumber');
  var resultCentral = $('#resultCentral');
  var callBtn = $('#callBtn');


  var convertRules = [
    {
      "central": "الثامن من آذار",
      "old number": 21,
      "new number": 221
    },
    {
      "central": "الثامن من آذار",
      "old number": 23,
      "new number": 223
    },
    {
      "central": "الثامن من آذار",
      "old number": 24,
      "new number": 224
    },
    {
      "central": "الثامن من آذار",
      "old number": 25,
      "new number": 225
    },
    {
      "central": "ضاحية الأسد - أفاميا",
      "old number": 31,
      "new number": 231
    },
    {
      "central": "ضاحية الأسد - أفاميا",
      "old number": 32,
      "new number": 232
    },
    {
      "central": "ضاحية الأسد - أفاميا",
      "old number": 33,
      "new number": 233
    },
    {
      "central": "ساحة اليمن",
      "old number": 34,
      "new number": 274
    },
    {
      "central": "الكورنيش الجنوبي",
      "old number": 35,
      "new number": 275
    },
    {
      "central": "الكورنيش الجنوبي",
      "old number": 36,
      "new number": 276
    },
    {
      "central": "الكورنيش الجنوبي",
      "old number": 37,
      "new number": 277
    },
    {
      "central": "المنطقة الصناعية",
      "old number": 38,
      "new number": 288
    },
    {
      "central": "المنطقة الصناعية",
      "old number": 39,
      "new number": 289
    },
    {
      "central": "تشرين",
      "old number": 41,
      "new number": 241
    },
    {
      "central": "الثامن من آذار",
      "old number": 45,
      "new number": 255
    },
    {
      "central": "الثامن من آذار",
      "old number": 46,
      "new number": 256
    },
    {
      "central": "الثامن من آذار",
      "old number": 47,
      "new number": 257
    },
    {
      "central": "الثامن من آذار",
      "old number": 49,
      "new number": 259
    },
    {
      "central": "تشرين",
      "old number": 55,
      "new number": 245
    },
    {
      "central": "تشرين",
      "old number": 59,
      "new number": 249
    },
    {
      "central": "الحفة",
      "old number": 73,
      "new number": 433
    },
    {
      "central": "جبلة",
      "old number": 80,
      "new number": 880
    },
    {
      "central": "جبلة",
      "old number": 82,
      "new number": 882
    },
    {
      "central": "القرداحة",
      "old number": 84,
      "new number": 654
    },
    {
      "central": "جبلة",
      "old number": 89,
      "new number": 889
    },
    {
      "central": "الثامن من آذار",
      "old number": 220,
      "new number": 2220
    },
    {
      "central": "الثامن من آذار",
      "old number": 221,
      "new number": 2221
    },
    {
      "central": "الثامن من آذار",
      "old number": 222,
      "new number": 2222
    },
    {
      "central": "الثامن من آذار",
      "old number": 223,
      "new number": 2223
    },
    {
      "central": "الثامن من آذار",
      "old number": 224,
      "new number": 2224
    },
    {
      "central": "الثامن من آذار",
      "old number": 225,
      "new number": 2225
    },
    {
      "central": "سيانو",
      "old number": 227,
      "new number": 8767
    },
    {
      "central": "سيانو",
      "old number": 228,
      "new number": 8768
    },
    {
      "central": "زغرين 3-4",
      "old number": 252,
      "new number": 7252
    },
    {
      "central": "زغرين 3-4",
      "old number": 253,
      "new number": 7253
    },
    {
      "central": "سقوبين 2",
      "old number": 260,
      "new number": 2660
    },
    {
      "central": "سنجوان 1",
      "old number": 261,
      "new number": 2861
    },
    {
      "central": "جب حسن",
      "old number": 262,
      "new number": 2162
    },
    {
      "central": "سقوبين",
      "old number": 263,
      "new number": 2663
    },
    {
      "central": "سنجوان 2",
      "old number": 264,
      "new number": 2864
    },
    {
      "central": "مشيرفة الساموك 2",
      "old number": 265,
      "new number": 7165
    },
    {
      "central": "متور",
      "old number": 266,
      "new number": 8466
    },
    {
      "central": "عين العروس",
      "old number": 267,
      "new number": 6767
    },
    {
      "central": "عين العروس",
      "old number": 268,
      "new number": 6768
    },
    {
      "central": "ستمرخو 2",
      "old number": 271,
      "new number": 2631
    },
    {
      "central": "الجنديرية",
      "old number": 274,
      "new number": 7274
    },
    {
      "central": "صليب التركمان",
      "old number": 276,
      "new number": 7576
    },
    {
      "central": "عين البيضا",
      "old number": 277,
      "new number": 7677
    },
    {
      "central": "عين البيضا",
      "old number": 278,
      "new number": 7678
    },
    {
      "central": "كرسانا",
      "old number": 280,
      "new number": 7380
    },
    {
      "central": "كرسانا",
      "old number": 284,
      "new number": 7584
    },
    {
      "central": "الفاخورة",
      "old number": 289,
      "new number": 6159
    },
    {
      "central": "فلسطينية 1",
      "old number": 344,
      "new number": 2844
    },
    {
      "central": "فلسطينية 2",
      "old number": 345,
      "new number": 2845
    },
    {
      "central": "فلسطينية 3",
      "old number": 346,
      "new number": 2846
    },
    {
      "central": "فلسطينية 4",
      "old number": 347,
      "new number": 2847
    },
    {
      "central": "سياحة جنوبية",
      "old number": 348,
      "new number": 2848
    },
    {
      "central": "المنطـقة الصـناعية",
      "old number": 398,
      "new number": 2998
    },
    {
      "central": "المزيرعة",
      "old number": 400,
      "new number": 4100
    },
    {
      "central": "عين التينة",
      "old number": 401,
      "new number": 4201
    },
    {
      "central": "عين التينة",
      "old number": 402,
      "new number": 4202
    },
    {
      "central": "رأس البسيط",
      "old number": 403,
      "new number": 7103
    },
    {
      "central": "الشاطئ الأزرق",
      "old number": 404,
      "new number": 2144
    },
    {
      "central": "الشاطئ الأزرق",
      "old number": 405,
      "new number": 2145
    },
    {
      "central": "رأس البسيط",
      "old number": 406,
      "new number": 7106
    },
    {
      "central": "المزيرعة",
      "old number": 407,
      "new number": 4107
    },
    {
      "central": "المزيرعة",
      "old number": 408,
      "new number": 4108
    },
    {
      "central": "تشرين",
      "old number": 420,
      "new number": 2420
    },
    {
      "central": "تشرين",
      "old number": 421,
      "new number": 2421
    },
    {
      "central": "تشرين",
      "old number": 422,
      "new number": 2422
    },
    {
      "central": "تشرين",
      "old number": 423,
      "new number": 2423
    },
    {
      "central": "تشرين",
      "old number": 424,
      "new number": 2424
    },
    {
      "central": "تشرين",
      "old number": 425,
      "new number": 2425
    },
    {
      "central": "تشرين",
      "old number": 426,
      "new number": 2426
    },
    {
      "central": "تشرين",
      "old number": 427,
      "new number": 2427
    },
    {
      "central": "الشاطئ الأزرق",
      "old number": 428,
      "new number": 2128
    },
    {
      "central": "رأس البسيط",
      "old number": 429,
      "new number": 7129
    },
    {
      "central": "رأس البسيط",
      "old number": 430,
      "new number": 7130
    },
    {
      "central": "تشرين",
      "old number": 431,
      "new number": 2431
    },
    {
      "central": "تشرين",
      "old number": 432,
      "new number": 2432
    },
    {
      "central": "تشرين",
      "old number": 433,
      "new number": 2433
    },
    {
      "central": "تشرين",
      "old number": 434,
      "new number": 2434
    },
    {
      "central": "تشرين",
      "old number": 435,
      "new number": 2435
    },
    {
      "central": "تشرين",
      "old number": 436,
      "new number": 2436
    },
    {
      "central": "تشرين",
      "old number": 437,
      "new number": 2437
    },
    {
      "central": "تشرين",
      "old number": 438,
      "new number": 2438
    },
    {
      "central": "تشرين",
      "old number": 439,
      "new number": 2439
    },
    {
      "central": "تشرين",
      "old number": 440,
      "new number": 2440
    },
    {
      "central": "تشرين",
      "old number": 441,
      "new number": 2441
    },
    {
      "central": "المزيرعة",
      "old number": 442,
      "new number": 4142
    },
    {
      "central": "عين التينة",
      "old number": 443,
      "new number": 4243
    },
    {
      "central": "تشرين",
      "old number": 444,
      "new number": 2444
    },
    {
      "central": "تشرين",
      "old number": 445,
      "new number": 2445
    },
    {
      "central": "تشرين",
      "old number": 446,
      "new number": 2446
    },
    {
      "central": "الشاطئ الأزرق",
      "old number": 448,
      "new number": 2148
    },
    {
      "central": "القنجرة",
      "old number": 480,
      "new number": 7680
    },
    {
      "central": "القنجرة",
      "old number": 481,
      "new number": 7681
    },
    {
      "central": "قسطل معاف",
      "old number": 482,
      "new number": 7482
    },
    {
      "central": "قسطل معاف",
      "old number": 483,
      "new number": 7483
    },
    {
      "central": "القنجرة",
      "old number": 485,
      "new number": 7685
    },
    {
      "central": "الثامن من آذار",
      "old number": 486,
      "new number": 2586
    },
    {
      "central": "الثامن من آذار",
      "old number": 487,
      "new number": 2587
    },
    {
      "central": "بلوران",
      "old number": 488,
      "new number": 7888
    },
    {
      "central": "بلوران",
      "old number": 489,
      "new number": 7889
    },
    {
      "central": "قرفيص",
      "old number": 510,
      "new number": 8510
    },
    {
      "central": "دوير بعبدا",
      "old number": 511,
      "new number": 8611
    },
    {
      "central": "دوير بعبدا",
      "old number": 513,
      "new number": 8613
    },
    {
      "central": "حمام القراحلة",
      "old number": 514,
      "new number": 8714
    },
    {
      "central": "العقيبة",
      "old number": 515,
      "new number": 8915
    },
    {
      "central": "حمام القراحلة",
      "old number": 516,
      "new number": 8716
    },
    {
      "central": "دوير بسنديانة",
      "old number": 517,
      "new number": 8717
    },
    {
      "central": "بستا",
      "old number": 518,
      "new number": 4518
    },
    {
      "central": "رأس البسيط",
      "old number": 524,
      "new number": 7124
    },
    {
      "central": "رأس البسيط",
      "old number": 525,
      "new number": 7125
    },
    {
      "central": "الكرامة",
      "old number": 530,
      "new number": 8930
    },
    {
      "central": "بيت علوني",
      "old number": 531,
      "new number": 8931
    },
    {
      "central": "بيت علوني",
      "old number": 532,
      "new number": 8932
    },
    {
      "central": "الحويز",
      "old number": 533,
      "new number": 8633
    },
    {
      "central": "دوير الخطيب",
      "old number": 534,
      "new number": 8934
    },
    {
      "central": "بكسا",
      "old number": 536,
      "new number": 7336
    },
    {
      "central": "بكسا",
      "old number": 537,
      "new number": 7337
    },
    {
      "central": "اللاذقية",
      "old number": 538,
      "new number": 2138
    },
    {
      "central": "اللاذقية",
      "old number": 539,
      "new number": 2139
    },
    {
      "central": "القطيلبية المركز1",
      "old number": 540,
      "new number": 8740
    },
    {
      "central": "القطيلبية المركز1",
      "old number": 541,
      "new number": 8741
    },
    {
      "central": "القطيلبية المركز2",
      "old number": 542,
      "new number": 8742
    },
    {
      "central": "الشاطئ الأزرق",
      "old number": 543,
      "new number": 2143
    },
    {
      "central": "الشاطئ الأزرق",
      "old number": 546,
      "new number": 2146
    },
    {
      "central": "الشاطئ الأزرق",
      "old number": 547,
      "new number": 2147
    },
    {
      "central": "القطيلبية",
      "old number": 548,
      "new number": 8748
    },
    {
      "central": "القطيلبية",
      "old number": 549,
      "new number": 8749
    },
    {
      "central": "الجديدة",
      "old number": 560,
      "new number": 6160
    },
    {
      "central": "كلماخو 1 + 2",
      "old number": 562,
      "new number": 6262
    },
    {
      "central": "كلماخو 1 + 2",
      "old number": 563,
      "new number": 6263
    },
    {
      "central": "المتن",
      "old number": 564,
      "new number": 6464
    },
    {
      "central": "الجبيرية",
      "old number": 565,
      "new number": 6165
    },
    {
      "central": "القلمون",
      "old number": 566,
      "new number": 6466
    },
    {
      "central": "المران",
      "old number": 567,
      "new number": 6467
    },
    {
      "central": "قلعة المهالبة",
      "old number": 568,
      "new number": 6868
    },
    {
      "central": "دير حنا",
      "old number": 569,
      "new number": 6969
    },
    {
      "central": "السفرقية",
      "old number": 570,
      "new number": 6470
    },
    {
      "central": "السفرقية",
      "old number": 571,
      "new number": 6471
    },
    {
      "central": "العامود",
      "old number": 572,
      "new number": 8572
    },
    {
      "central": "عرب ملك",
      "old number": 573,
      "new number": 8973
    },
    {
      "central": "سوكاس 1",
      "old number": 574,
      "new number": 8574
    },
    {
      "central": "بستان الباشا",
      "old number": 575,
      "new number": 8975
    },
    {
      "central": "الشراشير",
      "old number": 576,
      "new number": 8576
    },
    {
      "central": "بتغرامو",
      "old number": 577,
      "new number": 8977
    },
    {
      "central": "بنجارو",
      "old number": 578,
      "new number": 8978
    },
    {
      "central": "مزار القطرية",
      "old number": 579,
      "new number": 4679
    },
    {
      "central": "خرايب سالم",
      "old number": 580,
      "new number": 8280
    },
    {
      "central": "زاما",
      "old number": 581,
      "new number": 8481
    },
    {
      "central": "القنجرة",
      "old number": 582,
      "new number": 7682
    },
    {
      "central": "غنيري",
      "old number": 583,
      "new number": 8483
    },
    {
      "central": "دوير الشوا",
      "old number": 584,
      "new number": 8484
    },
    {
      "central": "قصابين",
      "old number": 585,
      "new number": 8485
    },
    {
      "central": "القنجرة",
      "old number": 586,
      "new number": 7686
    },
    {
      "central": "عين الشرقية",
      "old number": 587,
      "new number": 8487
    },
    {
      "central": "البهلولية",
      "old number": 588,
      "new number": 7188
    },
    {
      "central": "تشرين",
      "old number": 600,
      "new number": 2400
    },
    {
      "central": "تشرين",
      "old number": 601,
      "new number": 2401
    },
    {
      "central": "تشرين",
      "old number": 602,
      "new number": 2402
    },
    {
      "central": "تشرين",
      "old number": 603,
      "new number": 2403
    },
    {
      "central": "عين التينة",
      "old number": 604,
      "new number": 4204
    },
    {
      "central": "تشرين",
      "old number": 605,
      "new number": 2405
    },
    {
      "central": "تشرين",
      "old number": 606,
      "new number": 2406
    },
    {
      "central": "رويسة بسنادا",
      "old number": 607,
      "new number": 2607
    },
    {
      "central": "الشامية",
      "old number": 608,
      "new number": 7308
    },
    {
      "central": "الدراسات",
      "old number": 609,
      "new number": 7309
    },
    {
      "central": "القرداحة",
      "old number": 610,
      "new number": 6610
    },
    {
      "central": "القرداحة",
      "old number": 611,
      "new number": 6611
    },
    {
      "central": "القرداحة",
      "old number": 612,
      "new number": 6612
    },
    {
      "central": "القرداحة",
      "old number": 613,
      "new number": 6613
    },
    {
      "central": "القرداحة",
      "old number": 614,
      "new number": 6614
    },
    {
      "central": "القرداحة",
      "old number": 615,
      "new number": 6615
    },
    {
      "central": "القرداحة",
      "old number": 616,
      "new number": 6616
    },
    {
      "central": "اسطامو",
      "old number": 617,
      "new number": 8727
    },
    {
      "central": "القرداحة",
      "old number": 619,
      "new number": 6619
    },
    {
      "central": "بدميون",
      "old number": 630,
      "new number": 7530
    },
    {
      "central": "بدميون",
      "old number": 631,
      "new number": 7531
    },
    {
      "central": "الرامي المركز",
      "old number": 635,
      "new number": 4635
    },
    {
      "central": "الرويمية - الرامة",
      "old number": 636,
      "new number": 4636
    },
    {
      "central": "الرويمية - الرامة",
      "old number": 637,
      "new number": 4637
    },
    {
      "central": "الرويمية - الرامة",
      "old number": 638,
      "new number": 4638
    },
    {
      "central": "المقاطع",
      "old number": 640,
      "new number": 7440
    },
    {
      "central": "الرائد العربي",
      "old number": 641,
      "new number": 7441
    },
    {
      "central": "رويسة الحرش",
      "old number": 642,
      "new number": 7542
    },
    {
      "central": "عين الغزال",
      "old number": 643,
      "new number": 4643
    },
    {
      "central": "مزين",
      "old number": 644,
      "new number": 4644
    },
    {
      "central": "الغنيمة",
      "old number": 645,
      "new number": 4645
    },
    {
      "central": "قسطل العيدو",
      "old number": 646,
      "new number": 4646
    },
    {
      "central": "بروما",
      "old number": 647,
      "new number": 4647
    },
    {
      "central": "دويركة",
      "old number": 648,
      "new number": 4648
    },
    {
      "central": "مشقيتا",
      "old number": 650,
      "new number": 7350
    },
    {
      "central": "وادي الرميم",
      "old number": 651,
      "new number": 7351
    },
    {
      "central": "السرسكية",
      "old number": 653,
      "new number": 7353
    },
    {
      "central": "زغرين 1-2",
      "old number": 654,
      "new number": 7254
    },
    {
      "central": "زغرين 1-2",
      "old number": 655,
      "new number": 7255
    },
    {
      "central": "الضامات",
      "old number": 656,
      "new number": 7356
    },
    {
      "central": "كرم المعصرة",
      "old number": 657,
      "new number": 4257
    },
    {
      "central": "القصب",
      "old number": 658,
      "new number": 7358
    },
    {
      "central": "دير حنا",
      "old number": 659,
      "new number": 7359
    },
    {
      "central": "سنجوان 1",
      "old number": 660,
      "new number": 2860
    },
    {
      "central": "جب حسن",
      "old number": 661,
      "new number": 2161
    },
    {
      "central": "سقوبين",
      "old number": 662,
      "new number": 2662
    },
    {
      "central": "ستمرخو 1",
      "old number": 663,
      "new number": 2633
    },
    {
      "central": "مشيرفة الساموك 1",
      "old number": 664,
      "new number": 7164
    },
    {
      "central": "الجوزية",
      "old number": 665,
      "new number": 7365
    },
    {
      "central": "كبانة 1 - 2",
      "old number": 666,
      "new number": 4266
    },
    {
      "central": "كبانة 1 - 2",
      "old number": 667,
      "new number": 4267
    },
    {
      "central": "كبانة 1 - 2",
      "old number": 668,
      "new number": 4268
    },
    {
      "central": "كبانة 1 - 2",
      "old number": 669,
      "new number": 4269
    },
    {
      "central": "البارد",
      "old number": 670,
      "new number": 4570
    },
    {
      "central": "الحجر",
      "old number": 671,
      "new number": 4571
    },
    {
      "central": "صنوبر 1",
      "old number": 672,
      "new number": 8772
    },
    {
      "central": "صنوبر 1",
      "old number": 673,
      "new number": 8773
    },
    {
      "central": "صنوبر 2",
      "old number": 674,
      "new number": 8774
    },
    {
      "central": "صنوبر 2",
      "old number": 675,
      "new number": 8775
    },
    {
      "central": "رأس العين",
      "old number": 676,
      "new number": 8676
    },
    {
      "central": "سوكاس 2",
      "old number": 677,
      "new number": 8577
    },
    {
      "central": "محطة اللقماني الشيخ ضاهر",
      "old number": 678,
      "new number": 4578
    },
    {
      "central": "عرامو 1 - 2",
      "old number": 680,
      "new number": 4880
    },
    {
      "central": "عرامو 1 - 2",
      "old number": 681,
      "new number": 4881
    },
    {
      "central": "الشلفاطية",
      "old number": 682,
      "new number": 4682
    },
    {
      "central": "الزوبار",
      "old number": 683,
      "new number": 4683
    },
    {
      "central": "شريفة",
      "old number": 684,
      "new number": 4684
    },
    {
      "central": "كيمين",
      "old number": 685,
      "new number": 4685
    },
    {
      "central": "طرجانو",
      "old number": 686,
      "new number": 4686
    },
    {
      "central": "الشيخ حسامو",
      "old number": 687,
      "new number": 4687
    },
    {
      "central": "وطى الرامة",
      "old number": 688,
      "new number": 4688
    },
    {
      "central": "الحارة",
      "old number": 689,
      "new number": 4689
    },
    {
      "central": "أم الطيور",
      "old number": 690,
      "new number": 7990
    },
    {
      "central": "الزيتونة",
      "old number": 691,
      "new number": 7991
    },
    {
      "central": "العيسوية",
      "old number": 692,
      "new number": 7992
    },
    {
      "central": "البدروسية",
      "old number": 693,
      "new number": 7993
    },
    {
      "central": "الشيخ حسن",
      "old number": 694,
      "new number": 7994
    },
    {
      "central": "المشرفة",
      "old number": 695,
      "new number": 7995
    },
    {
      "central": "نيننتي",
      "old number": 697,
      "new number": 8697
    },
    {
      "central": "ضاحية الأسد - أفاميا",
      "old number": 700,
      "new number": 2300
    },
    {
      "central": "ضاحية الأسد - أفاميا",
      "old number": 701,
      "new number": 2301
    },
    {
      "central": "كسب",
      "old number": 710,
      "new number": 7710
    },
    {
      "central": "كسب",
      "old number": 711,
      "new number": 7711
    },
    {
      "central": "كسب",
      "old number": 712,
      "new number": 7712
    },
    {
      "central": "كسب",
      "old number": 713,
      "new number": 7713
    },
    {
      "central": "كسب",
      "old number": 719,
      "new number": 7719
    },
    {
      "central": "السامية",
      "old number": 740,
      "new number": 4440
    },
    {
      "central": "السامية",
      "old number": 741,
      "new number": 4441
    },
    {
      "central": "السامية",
      "old number": 742,
      "new number": 4442
    },
    {
      "central": "قطيلبية",
      "old number": 743,
      "new number": 8743
    },
    {
      "central": "قطيلبية",
      "old number": 744,
      "new number": 8744
    },
    {
      "central": "قطيلبية",
      "old number": 745,
      "new number": 8745
    },
    {
      "central": "قطيلبية",
      "old number": 746,
      "new number": 8746
    },
    {
      "central": "عين شقاق",
      "old number": 747,
      "new number": 8947
    },
    {
      "central": "عين شقاق",
      "old number": 748,
      "new number": 8948
    },
    {
      "central": "سيانو",
      "old number": 761,
      "new number": 8761
    },
    {
      "central": "سيانو",
      "old number": 762,
      "new number": 8762
    },
    {
      "central": "سلورين - عين العروس",
      "old number": 764,
      "new number": 6764
    },
    {
      "central": "سلورين - عين العروس",
      "old number": 765,
      "new number": 6765
    },
    {
      "central": "سلورين - عين العروس",
      "old number": 766,
      "new number": 6766
    },
    {
      "central": "البودي",
      "old number": 767,
      "new number": 8667
    },
    {
      "central": "البودي",
      "old number": 768,
      "new number": 8668
    },
    {
      "central": "البودي",
      "old number": 769,
      "new number": 8669
    },
    {
      "central": "رأس العين",
      "old number": 770,
      "new number": 8670
    },
    {
      "central": "رأس العين",
      "old number": 771,
      "new number": 8671
    },
    {
      "central": "رأس العين",
      "old number": 772,
      "new number": 8672
    },
    {
      "central": "رأس العين",
      "old number": 773,
      "new number": 8673
    },
    {
      "central": "عين البيضا",
      "old number": 774,
      "new number": 7674
    },
    {
      "central": "عين البيضا",
      "old number": 775,
      "new number": 7675
    },
    {
      "central": "عين البيضا",
      "old number": 776,
      "new number": 7676
    },
    {
      "central": "صليب التركمان",
      "old number": 777,
      "new number": 7577
    },
    {
      "central": "صليب التركمان",
      "old number": 778,
      "new number": 7578
    },
    {
      "central": "صليب التركمان",
      "old number": 779,
      "new number": 7579
    },
    {
      "central": "كرسانا",
      "old number": 780,
      "new number": 7580
    },
    {
      "central": "كرسانا",
      "old number": 781,
      "new number": 7581
    },
    {
      "central": "كرسانا",
      "old number": 782,
      "new number": 7582
    },
    {
      "central": "كرسانا",
      "old number": 783,
      "new number": 7583
    },
    {
      "central": "البهلولية",
      "old number": 784,
      "new number": 7184
    },
    {
      "central": "البهلولية",
      "old number": 785,
      "new number": 7185
    },
    {
      "central": "البهلولية",
      "old number": 786,
      "new number": 7186
    },
    {
      "central": "كنسبا",
      "old number": 787,
      "new number": 4787
    },
    {
      "central": "كنسبا",
      "old number": 788,
      "new number": 4788
    },
    {
      "central": "كنسبا",
      "old number": 789,
      "new number": 4789
    },
    {
      "central": "ربيعة",
      "old number": 791,
      "new number": 7291
    },
    {
      "central": "ربيعة",
      "old number": 792,
      "new number": 7292
    },
    {
      "central": "سلمى",
      "old number": 793,
      "new number": 4293
    },
    {
      "central": "سلمى",
      "old number": 794,
      "new number": 4294
    },
    {
      "central": "سلمى",
      "old number": 795,
      "new number": 4295
    },
    {
      "central": "سلمى",
      "old number": 796,
      "new number": 4296
    },
    {
      "central": "تلا",
      "old number": 797,
      "new number": 4797
    },
    {
      "central": "تلا",
      "old number": 798,
      "new number": 4798
    },
    {
      "central": "حمام القراحلة",
      "old number": 810,
      "new number": 8710
    },
    {
      "central": "دوير بعبدا",
      "old number": 812,
      "new number": 8612
    },
    {
      "central": "حرف المسيترة",
      "old number": 813,
      "new number": 8533
    },
    {
      "central": "العقيبة",
      "old number": 814,
      "new number": 8914
    },
    {
      "central": "حمام القراحلة",
      "old number": 815,
      "new number": 8715
    },
    {
      "central": "دوير بعبدا",
      "old number": 816,
      "new number": 8616
    },
    {
      "central": "حرف المسيترة",
      "old number": 817,
      "new number": 8537
    },
    {
      "central": "حرف المسيترة",
      "old number": 818,
      "new number": 8538
    },
    {
      "central": "جبلة",
      "old number": 830,
      "new number": 8830
    },
    {
      "central": "جبلة",
      "old number": 831,
      "new number": 8831
    },
    {
      "central": "جبلة",
      "old number": 832,
      "new number": 8832
    },
    {
      "central": "جبلة",
      "old number": 833,
      "new number": 8833
    },
    {
      "central": "جبلة",
      "old number": 834,
      "new number": 8834
    },
    {
      "central": "جبلة",
      "old number": 835,
      "new number": 8835
    },
    {
      "central": "جبلة",
      "old number": 836,
      "new number": 8836
    },
    {
      "central": "جبلة",
      "old number": 837,
      "new number": 8837
    },
    {
      "central": "جبلة",
      "old number": 838,
      "new number": 8838
    },
    {
      "central": "زينو",
      "old number": 850,
      "new number": 6650
    },
    {
      "central": "الفاخورة",
      "old number": 851,
      "new number": 6151
    },
    {
      "central": "جوبة برغال",
      "old number": 852,
      "new number": 6252
    },
    {
      "central": "الفاخورة",
      "old number": 853,
      "new number": 6153
    },
    {
      "central": "الفاخورة",
      "old number": 854,
      "new number": 6154
    },
    {
      "central": "الفاخورة",
      "old number": 855,
      "new number": 6155
    },
    {
      "central": "قروصو",
      "old number": 856,
      "new number": 6356
    },
    {
      "central": "قمين",
      "old number": 857,
      "new number": 6457
    },
    {
      "central": "بكراما",
      "old number": 858,
      "new number": 6858
    },
    {
      "central": "بكراما",
      "old number": 859,
      "new number": 6859
    },
    {
      "central": "بيت ياشوط",
      "old number": 860,
      "new number": 8360
    },
    {
      "central": "بيت ياشوط",
      "old number": 861,
      "new number": 8361
    },
    {
      "central": "بيت ياشوط",
      "old number": 862,
      "new number": 8362
    },
    {
      "central": "بيت ياشوط",
      "old number": 863,
      "new number": 8363
    },
    {
      "central": "متور",
      "old number": 864,
      "new number": 8464
    },
    {
      "central": "متور",
      "old number": 865,
      "new number": 8465
    },
    {
      "central": "بيت ياشوط",
      "old number": 866,
      "new number": 8366
    },
    {
      "central": "بيت ياشوط",
      "old number": 867,
      "new number": 8367
    },
    {
      "central": "بيت ياشوط",
      "old number": 868,
      "new number": 8368
    },
    {
      "central": "بيت ياشوط",
      "old number": 869,
      "new number": 8369
    },
    {
      "central": "صنوبر",
      "old number": 870,
      "new number": 8770
    },
    {
      "central": "الجنديرية",
      "old number": 871,
      "new number": 7271
    },
    {
      "central": "الجنديرية",
      "old number": 872,
      "new number": 7272
    },
    {
      "central": "القلايع",
      "old number": 873,
      "new number": 8473
    },
    {
      "central": "القلايع",
      "old number": 874,
      "new number": 8474
    },
    {
      "central": "القلايع",
      "old number": 875,
      "new number": 8475
    },
    {
      "central": "القلايع",
      "old number": 876,
      "new number": 8476
    },
    {
      "central": "صنوبر",
      "old number": 877,
      "new number": 8777
    },
    {
      "central": "صنوبر",
      "old number": 878,
      "new number": 8778
    },
    {
      "central": "صنوبر",
      "old number": 879,
      "new number": 8779
    },
    {
      "central": "الدالية",
      "old number": 880,
      "new number": 8180
    },
    {
      "central": "الدالية",
      "old number": 881,
      "new number": 8181
    },
    {
      "central": "الدالية",
      "old number": 882,
      "new number": 8182
    },
    {
      "central": "الدالية",
      "old number": 883,
      "new number": 8183
    },
    {
      "central": "الدالية",
      "old number": 884,
      "new number": 8184
    },
    {
      "central": "الدالية",
      "old number": 885,
      "new number": 8185
    },
    {
      "central": "الدالية",
      "old number": 886,
      "new number": 8186
    },
    {
      "central": "الدالية",
      "old number": 887,
      "new number": 8187
    },
    {
      "central": "وادي القلع",
      "old number": 888,
      "new number": 8288
    },
    {
      "central": "الدالية",
      "old number": 889,
      "new number": 8189
    },
    {
      "central": "مفرق جبلة",
      "old number": 895,
      "new number": 8695
    },
    {
      "central": "مطار حميميم",
      "old number": 896,
      "new number": 8796
    },
    {
      "central": "البرجان",
      "old number": 897,
      "new number": 8797
    },
    {
      "central": "محطة جبلة",
      "old number": 898,
      "new number": 8998
    },
    {
      "central": "محطة جبلة",
      "old number": 899,
      "new number": 8999
    },
    {
      "central": "الشاطئ الأزرق",
      "old number": 4097,
      "new number": 21497
    },
    {
      "central": "تشرين",
      "old number": 4098,
      "new number": 24098
    },
    {
      "central": "تشرين",
      "old number": 4099,
      "new number": 24099
    },
    {
      "central": "الشاطئ الأزرق",
      "old number": 4290,
      "new number": 21290
    },
    {
      "central": "الشاطئ الأزرق",
      "old number": 4291,
      "new number": 21291
    },
    {
      "central": "الشاطئ الأزرق",
      "old number": 4292,
      "new number": 21292
    },
    {
      "central": "الشاطئ الأزرق",
      "old number": 4293,
      "new number": 21293
    },
    {
      "central": "الشاطئ الأزرق",
      "old number": 4294,
      "new number": 21294
    },
    {
      "central": "عين شقاق",
      "old number": 7490,
      "new number": 89490
    },
    {
      "central": "عين شقاق",
      "old number": 7491,
      "new number": 89491
    },
    {
      "central": "عين شقاق",
      "old number": 7492,
      "new number": 89492
    },
    {
      "central": "عين شقاق",
      "old number": 7493,
      "new number": 89493
    },
    {
      "central": "عين شقاق",
      "old number": 7494,
      "new number": 89494
    },
    {
      "central": "عين شقاق",
      "old number": 7495,
      "new number": 89495
    },
    {
      "central": "عين شقاق",
      "old number": 7496,
      "new number": 89496
    },
    {
      "central": "عين شقاق",
      "old number": 7497,
      "new number": 89497
    },
    {
      "central": "عين شقاق",
      "old number": 7498,
      "new number": 89498
    },
    {
      "central": "عين شقاق",
      "old number": 7499,
      "new number": 89499
    },
    {
      "central": "القرداحة",
      "old number": 8559,
      "new number": 65559
    }
  ];
  var the_rule;
  var res;

  function parseArabic(str) {
    return Number(str.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
      return d.charCodeAt(0) - 1632; // Convert Arabic numbers
    })
    );
  }
  oldNumber.on('input', function (e) {
    res = null;
    var ol_n = parseArabic(oldNumber.val().toString()).toString();
    // console.log("parseArabic.: ", ol_n);

    if (isNaN(ol_n)) {
      resultCentral.html('...');
      resultNumber.html('...');
      callBtn.attr('href', '#');
      return;
    }
    // console.log("the old no.: ", oldNumber.val());
    if (ol_n.length > 1) {
      the_rule = getRule(ol_n);
      res = newNumber(the_rule, ol_n);
      resultCentral.html(res['central']);
      resultNumber.html(res['new']);
      callBtn.attr('href', 'tel:041' + res['new']);
    } else if (ol_n.length <= 1) {

      resultCentral.html('...');
      resultNumber.html('...');
      callBtn.attr('href', '#');
    }
    // console.log(the_rule);
  });

  function getRule(oldNum) {
    var r;
    $.each(convertRules, function (i, rule) {
      if (oldNum.indexOf(rule['old number'].toString()) === 0) {
        r = rule;
        // console.log(i, rule);

      }
    });
    // console.log(r);
    return r;
  };



  function newNumber(r, o) {
    var res = [];
    // console.log(r);
    res['new'] = r ? (o.toString().replace(r['old number'], r['new number'])) : '...';
    res['central'] = r ? r['central'] : '...';
    return res;
  };



  //reverse conversion
  var convertRules2 = [
    {
      "central": "الثامن من آذار B",
      "new number": 21,
      "old number": 221
    },
    {
      "central": "الثامن من آذار B",
      "new number": 23,
      "old number": 223
    },
    {
      "central": "الثامن من آذار B",
      "new number": 24,
      "old number": 224
    },
    {
      "central": "الثامن من آذار B",
      "new number": 25,
      "old number": 225
    },
    {
      "central": "ضاحية الأسد - أفاميا",
      "new number": 31,
      "old number": 231
    },
    {
      "central": "ضاحية الأسد - أفاميا",
      "new number": 32,
      "old number": 232
    },
    {
      "central": "ضاحية الأسد - أفاميا",
      "new number": 33,
      "old number": 233
    },
    {
      "central": "تشرين",
      "new number": 41,
      "old number": 241
    },
    {
      "central": "تشرين",
      "new number": 55,
      "old number": 245
    },
    {
      "central": "تشرين",
      "new number": 59,
      "old number": 249
    },
    {
      "central": "الثامن من آذار A",
      "new number": 45,
      "old number": 255
    },
    {
      "central": "الثامن من آذار A",
      "new number": 46,
      "old number": 256
    },
    {
      "central": "الثامن من آذار A",
      "new number": 47,
      "old number": 257
    },
    {
      "central": "الثامن من آذار A",
      "new number": 49,
      "old number": 259
    },
    {
      "central": "ساحة اليمن",
      "new number": 34,
      "old number": 274
    },
    {
      "central": "الكورنيش الجنوبي",
      "new number": 35,
      "old number": 275
    },
    {
      "central": "الكورنيش الجنوبي",
      "new number": 36,
      "old number": 276
    },
    {
      "central": "الكورنيش الجنوبي",
      "new number": 37,
      "old number": 277
    },
    {
      "central": "المنطقة الصناعية",
      "new number": 38,
      "old number": 288
    },
    {
      "central": "المنطقة الصناعية",
      "new number": 39,
      "old number": 289
    },
    {
      "central": "الحفة",
      "new number": 73,
      "old number": 433
    },
    {
      "central": "القرداحة",
      "new number": 84,
      "old number": 654
    },
    {
      "central": "جبلة",
      "new number": 80,
      "old number": 880
    },
    {
      "central": "جبلة",
      "new number": 82,
      "old number": 882
    },
    {
      "central": "جبلة",
      "new number": 89,
      "old number": 889
    },
    {
      "central": "الشاطئ الأزرق",
      "new number": 428,
      "old number": 2128
    },
    {
      "central": "اللاذقية",
      "new number": 538,
      "old number": 2138
    },
    {
      "central": "اللاذقية",
      "new number": 539,
      "old number": 2139
    },
    {
      "central": "الشاطئ الأزرق",
      "new number": 543,
      "old number": 2143
    },
    {
      "central": "الشاطئ الأزرق",
      "new number": 404,
      "old number": 2144
    },
    {
      "central": "الشاطئ الأزرق",
      "new number": 405,
      "old number": 2145
    },
    {
      "central": "الشاطئ الأزرق",
      "new number": 546,
      "old number": 2146
    },
    {
      "central": "الشاطئ الأزرق",
      "new number": 547,
      "old number": 2147
    },
    {
      "central": "الشاطئ الأزرق",
      "new number": 448,
      "old number": 2148
    },
    {
      "central": "جب حسن",
      "new number": 661,
      "old number": 2161
    },
    {
      "central": "جب حسن",
      "new number": 262,
      "old number": 2162
    },
    {
      "central": "الثامن من آذار B",
      "new number": 220,
      "old number": 2220
    },
    {
      "central": "الثامن من آذار B",
      "new number": 221,
      "old number": 2221
    },
    {
      "central": "الثامن من آذار B",
      "new number": 222,
      "old number": 2222
    },
    {
      "central": "الثامن من آذار B",
      "new number": 223,
      "old number": 2223
    },
    {
      "central": "الثامن من آذار B",
      "new number": 224,
      "old number": 2224
    },
    {
      "central": "الثامن من آذار B",
      "new number": 225,
      "old number": 2225
    },
    {
      "central": "ضاحية الأسد - أفاميا",
      "new number": 700,
      "old number": 2300
    },
    {
      "central": "ضاحية الأسد - أفاميا",
      "new number": 701,
      "old number": 2301
    },
    {
      "central": "تشرين",
      "new number": 600,
      "old number": 2400
    },
    {
      "central": "تشرين",
      "new number": 601,
      "old number": 2401
    },
    {
      "central": "تشرين",
      "new number": 602,
      "old number": 2402
    },
    {
      "central": "تشرين",
      "new number": 603,
      "old number": 2403
    },
    {
      "central": "تشرين",
      "new number": 605,
      "old number": 2405
    },
    {
      "central": "تشرين",
      "new number": 606,
      "old number": 2406
    },
    {
      "central": "تشرين",
      "new number": 420,
      "old number": 2420
    },
    {
      "central": "تشرين",
      "new number": 421,
      "old number": 2421
    },
    {
      "central": "تشرين",
      "new number": 422,
      "old number": 2422
    },
    {
      "central": "تشرين",
      "new number": 423,
      "old number": 2423
    },
    {
      "central": "تشرين",
      "new number": 424,
      "old number": 2424
    },
    {
      "central": "تشرين",
      "new number": 425,
      "old number": 2425
    },
    {
      "central": "تشرين",
      "new number": 426,
      "old number": 2426
    },
    {
      "central": "تشرين",
      "new number": 427,
      "old number": 2427
    },
    {
      "central": "تشرين",
      "new number": 431,
      "old number": 2431
    },
    {
      "central": "تشرين",
      "new number": 432,
      "old number": 2432
    },
    {
      "central": "تشرين",
      "new number": 433,
      "old number": 2433
    },
    {
      "central": "تشرين",
      "new number": 434,
      "old number": 2434
    },
    {
      "central": "تشرين",
      "new number": 435,
      "old number": 2435
    },
    {
      "central": "تشرين",
      "new number": 436,
      "old number": 2436
    },
    {
      "central": "تشرين",
      "new number": 437,
      "old number": 2437
    },
    {
      "central": "تشرين",
      "new number": 438,
      "old number": 2438
    },
    {
      "central": "تشرين",
      "new number": 439,
      "old number": 2439
    },
    {
      "central": "تشرين",
      "new number": 440,
      "old number": 2440
    },
    {
      "central": "تشرين",
      "new number": 441,
      "old number": 2441
    },
    {
      "central": "تشرين",
      "new number": 444,
      "old number": 2444
    },
    {
      "central": "تشرين",
      "new number": 445,
      "old number": 2445
    },
    {
      "central": "تشرين",
      "new number": 446,
      "old number": 2446
    },
    {
      "central": "الثامن من آذار A",
      "new number": 486,
      "old number": 2586
    },
    {
      "central": "الثامن من آذار A",
      "new number": 487,
      "old number": 2587
    },
    {
      "central": "رويسة بسنادا",
      "new number": 607,
      "old number": 2607
    },
    {
      "central": "ستمرخو 2",
      "new number": 271,
      "old number": 2631
    },
    {
      "central": "ستمرخو 1",
      "new number": 663,
      "old number": 2633
    },
    {
      "central": "سقوبين 2",
      "new number": 260,
      "old number": 2660
    },
    {
      "central": "سقوبين",
      "new number": 662,
      "old number": 2662
    },
    {
      "central": "سقوبين",
      "new number": 263,
      "old number": 2663
    },
    {
      "central": "فلسطينية 1",
      "new number": 344,
      "old number": 2844
    },
    {
      "central": "فلسطينية 2",
      "new number": 345,
      "old number": 2845
    },
    {
      "central": "فلسطينية 3",
      "new number": 346,
      "old number": 2846
    },
    {
      "central": "فلسطينية 4",
      "new number": 347,
      "old number": 2847
    },
    {
      "central": "سياحة جنوبية",
      "new number": 348,
      "old number": 2848
    },
    {
      "central": "سنجوان 1",
      "new number": 660,
      "old number": 2860
    },
    {
      "central": "سنجوان 1",
      "new number": 261,
      "old number": 2861
    },
    {
      "central": "سنجوان 2",
      "new number": 264,
      "old number": 2864
    },
    {
      "central": "المنطـقة الصـناعية",
      "new number": 398,
      "old number": 2998
    },
    {
      "central": "المزيرعة",
      "new number": 400,
      "old number": 4100
    },
    {
      "central": "المزيرعة",
      "new number": 407,
      "old number": 4107
    },
    {
      "central": "المزيرعة",
      "new number": 408,
      "old number": 4108
    },
    {
      "central": "المزيرعة",
      "new number": 442,
      "old number": 4142
    },
    {
      "central": "عين التينة",
      "new number": 401,
      "old number": 4201
    },
    {
      "central": "عين التينة",
      "new number": 402,
      "old number": 4202
    },
    {
      "central": "عين التينة",
      "new number": 604,
      "old number": 4204
    },
    {
      "central": "عين التينة",
      "new number": 443,
      "old number": 4243
    },
    {
      "central": "كرم المعصرة",
      "new number": 657,
      "old number": 4257
    },
    {
      "central": "كبانة 1 - 2",
      "new number": 666,
      "old number": 4266
    },
    {
      "central": "كبانة 1 - 2",
      "new number": 667,
      "old number": 4267
    },
    {
      "central": "كبانة 1 - 2",
      "new number": 668,
      "old number": 4268
    },
    {
      "central": "كبانة 1 - 2",
      "new number": 669,
      "old number": 4269
    },
    {
      "central": "سلمى",
      "new number": 793,
      "old number": 4293
    },
    {
      "central": "سلمى",
      "new number": 794,
      "old number": 4294
    },
    {
      "central": "سلمى",
      "new number": 795,
      "old number": 4295
    },
    {
      "central": "سلمى",
      "new number": 796,
      "old number": 4296
    },
    {
      "central": "السامية",
      "new number": 740,
      "old number": 4440
    },
    {
      "central": "السامية",
      "new number": 741,
      "old number": 4441
    },
    {
      "central": "السامية",
      "new number": 742,
      "old number": 4442
    },
    {
      "central": "بستا",
      "new number": 518,
      "old number": 4518
    },
    {
      "central": "البارد",
      "new number": 670,
      "old number": 4570
    },
    {
      "central": "الحجر",
      "new number": 671,
      "old number": 4571
    },
    {
      "central": "محطة اللقماني الشيخ ضاهر",
      "new number": 678,
      "old number": 4578
    },
    {
      "central": "الرامي المركز",
      "new number": 635,
      "old number": 4635
    },
    {
      "central": "الرويمية - الرامة",
      "new number": 636,
      "old number": 4636
    },
    {
      "central": "الرويمية - الرامة",
      "new number": 637,
      "old number": 4637
    },
    {
      "central": "الرويمية - الرامة",
      "new number": 638,
      "old number": 4638
    },
    {
      "central": "عين الغزال",
      "new number": 643,
      "old number": 4643
    },
    {
      "central": "مزين",
      "new number": 644,
      "old number": 4644
    },
    {
      "central": "الغنيمة",
      "new number": 645,
      "old number": 4645
    },
    {
      "central": "قسطل العيدو",
      "new number": 646,
      "old number": 4646
    },
    {
      "central": "بروما",
      "new number": 647,
      "old number": 4647
    },
    {
      "central": "دويركة",
      "new number": 648,
      "old number": 4648
    },
    {
      "central": "مزار القطرية",
      "new number": 579,
      "old number": 4679
    },
    {
      "central": "الشلفاطية",
      "new number": 682,
      "old number": 4682
    },
    {
      "central": "الزوبار",
      "new number": 683,
      "old number": 4683
    },
    {
      "central": "شريفة",
      "new number": 684,
      "old number": 4684
    },
    {
      "central": "كيمين",
      "new number": 685,
      "old number": 4685
    },
    {
      "central": "طرجانو",
      "new number": 686,
      "old number": 4686
    },
    {
      "central": "الشيخ حسامو",
      "new number": 687,
      "old number": 4687
    },
    {
      "central": "وطى الرامة",
      "new number": 688,
      "old number": 4688
    },
    {
      "central": "الحارة",
      "new number": 689,
      "old number": 4689
    },
    {
      "central": "كنسبا",
      "new number": 787,
      "old number": 4787
    },
    {
      "central": "كنسبا",
      "new number": 788,
      "old number": 4788
    },
    {
      "central": "كنسبا",
      "new number": 789,
      "old number": 4789
    },
    {
      "central": "تلا",
      "new number": 797,
      "old number": 4797
    },
    {
      "central": "تلا",
      "new number": 798,
      "old number": 4798
    },
    {
      "central": "عرامو 1 - 2",
      "new number": 680,
      "old number": 4880
    },
    {
      "central": "عرامو 1 - 2",
      "new number": 681,
      "old number": 4881
    },
    {
      "central": "الفاخورة",
      "new number": 851,
      "old number": 6151
    },
    {
      "central": "الفاخورة",
      "new number": 853,
      "old number": 6153
    },
    {
      "central": "الفاخورة",
      "new number": 854,
      "old number": 6154
    },
    {
      "central": "الفاخورة",
      "new number": 855,
      "old number": 6155
    },
    {
      "central": "الفاخورة",
      "new number": 289,
      "old number": 6159
    },
    {
      "central": "الجديدة",
      "new number": 560,
      "old number": 6160
    },
    {
      "central": "الجبيرية",
      "new number": 565,
      "old number": 6165
    },
    {
      "central": "جوبة برغال",
      "new number": 852,
      "old number": 6252
    },
    {
      "central": "كلماخو 1 + 2",
      "new number": 562,
      "old number": 6262
    },
    {
      "central": "كلماخو 1 + 2",
      "new number": 563,
      "old number": 6263
    },
    {
      "central": "قروصو",
      "new number": 856,
      "old number": 6356
    },
    {
      "central": "قمين",
      "new number": 857,
      "old number": 6457
    },
    {
      "central": "المتن",
      "new number": 564,
      "old number": 6464
    },
    {
      "central": "القلمون",
      "new number": 566,
      "old number": 6466
    },
    {
      "central": "المران",
      "new number": 567,
      "old number": 6467
    },
    {
      "central": "السفرقية",
      "new number": 570,
      "old number": 6470
    },
    {
      "central": "السفرقية",
      "new number": 571,
      "old number": 6471
    },
    {
      "central": "القرداحة",
      "new number": 610,
      "old number": 6610
    },
    {
      "central": "القرداحة",
      "new number": 611,
      "old number": 6611
    },
    {
      "central": "القرداحة",
      "new number": 612,
      "old number": 6612
    },
    {
      "central": "القرداحة",
      "new number": 613,
      "old number": 6613
    },
    {
      "central": "القرداحة",
      "new number": 614,
      "old number": 6614
    },
    {
      "central": "القرداحة",
      "new number": 615,
      "old number": 6615
    },
    {
      "central": "القرداحة",
      "new number": 616,
      "old number": 6616
    },
    {
      "central": "القرداحة",
      "new number": 619,
      "old number": 6619
    },
    {
      "central": "زينو",
      "new number": 850,
      "old number": 6650
    },
    {
      "central": "سلورين - عين العروس",
      "new number": 764,
      "old number": 6764
    },
    {
      "central": "سلورين - عين العروس",
      "new number": 765,
      "old number": 6765
    },
    {
      "central": "سلورين - عين العروس",
      "new number": 766,
      "old number": 6766
    },
    {
      "central": "عين العروس",
      "new number": 267,
      "old number": 6767
    },
    {
      "central": "عين العروس",
      "new number": 268,
      "old number": 6768
    },
    {
      "central": "بكراما",
      "new number": 858,
      "old number": 6858
    },
    {
      "central": "بكراما",
      "new number": 859,
      "old number": 6859
    },
    {
      "central": "قلعة المهالبة",
      "new number": 568,
      "old number": 6868
    },
    {
      "central": "دير حنا",
      "new number": 569,
      "old number": 6969
    },
    {
      "central": "رأس البسيط",
      "new number": 403,
      "old number": 7103
    },
    {
      "central": "رأس البسيط",
      "new number": 406,
      "old number": 7106
    },
    {
      "central": "رأس البسيط",
      "new number": 524,
      "old number": 7124
    },
    {
      "central": "رأس البسيط",
      "new number": 525,
      "old number": 7125
    },
    {
      "central": "رأس البسيط",
      "new number": 429,
      "old number": 7129
    },
    {
      "central": "رأس البسيط",
      "new number": 430,
      "old number": 7130
    },
    {
      "central": "مشيرفة الساموك 1",
      "new number": 664,
      "old number": 7164
    },
    {
      "central": "مشيرفة الساموك 2",
      "new number": 265,
      "old number": 7165
    },
    {
      "central": "البهلولية",
      "new number": 784,
      "old number": 7184
    },
    {
      "central": "البهلولية",
      "new number": 785,
      "old number": 7185
    },
    {
      "central": "البهلولية",
      "new number": 786,
      "old number": 7186
    },
    {
      "central": "البهلولية",
      "new number": 588,
      "old number": 7188
    },
    {
      "central": "زغرين 3-4",
      "new number": 252,
      "old number": 7252
    },
    {
      "central": "زغرين 3-4",
      "new number": 253,
      "old number": 7253
    },
    {
      "central": "زغرين 1-2",
      "new number": 654,
      "old number": 7254
    },
    {
      "central": "زغرين 1-2",
      "new number": 655,
      "old number": 7255
    },
    {
      "central": "الجنديرية",
      "new number": 871,
      "old number": 7271
    },
    {
      "central": "الجنديرية",
      "new number": 872,
      "old number": 7272
    },
    {
      "central": "الجنديرية",
      "new number": 274,
      "old number": 7274
    },
    {
      "central": "ربيعة",
      "new number": 791,
      "old number": 7291
    },
    {
      "central": "ربيعة",
      "new number": 792,
      "old number": 7292
    },
    {
      "central": "الشامية",
      "new number": 608,
      "old number": 7308
    },
    {
      "central": "الدراسات",
      "new number": 609,
      "old number": 7309
    },
    {
      "central": "بكسا",
      "new number": 536,
      "old number": 7336
    },
    {
      "central": "بكسا",
      "new number": 537,
      "old number": 7337
    },
    {
      "central": "مشقيتا",
      "new number": 650,
      "old number": 7350
    },
    {
      "central": "وادي الرميم",
      "new number": 651,
      "old number": 7351
    },
    {
      "central": "السرسكية",
      "new number": 653,
      "old number": 7353
    },
    {
      "central": "الضامات",
      "new number": 656,
      "old number": 7356
    },
    {
      "central": "القصب",
      "new number": 658,
      "old number": 7358
    },
    {
      "central": "دير حنا",
      "new number": 659,
      "old number": 7359
    },
    {
      "central": "الجوزية",
      "new number": 665,
      "old number": 7365
    },
    {
      "central": "كرسانا",
      "new number": 280,
      "old number": 7380
    },
    {
      "central": "المقاطع",
      "new number": 640,
      "old number": 7440
    },
    {
      "central": "الرائد العربي",
      "new number": 641,
      "old number": 7441
    },
    {
      "central": "قسطل معاف",
      "new number": 482,
      "old number": 7482
    },
    {
      "central": "قسطل معاف",
      "new number": 483,
      "old number": 7483
    },
    {
      "central": "بدميون",
      "new number": 630,
      "old number": 7530
    },
    {
      "central": "بدميون",
      "new number": 631,
      "old number": 7531
    },
    {
      "central": "رويسة الحرش",
      "new number": 642,
      "old number": 7542
    },
    {
      "central": "صليب التركمان",
      "new number": 276,
      "old number": 7576
    },
    {
      "central": "صليب التركمان",
      "new number": 777,
      "old number": 7577
    },
    {
      "central": "صليب التركمان",
      "new number": 778,
      "old number": 7578
    },
    {
      "central": "صليب التركمان",
      "new number": 779,
      "old number": 7579
    },
    {
      "central": "كرسانا",
      "new number": 780,
      "old number": 7580
    },
    {
      "central": "كرسانا",
      "new number": 781,
      "old number": 7581
    },
    {
      "central": "كرسانا",
      "new number": 782,
      "old number": 7582
    },
    {
      "central": "كرسانا",
      "new number": 783,
      "old number": 7583
    },
    {
      "central": "كرسانا",
      "new number": 284,
      "old number": 7584
    },
    {
      "central": "عين البيضا",
      "new number": 774,
      "old number": 7674
    },
    {
      "central": "عين البيضا",
      "new number": 775,
      "old number": 7675
    },
    {
      "central": "عين البيضا",
      "new number": 776,
      "old number": 7676
    },
    {
      "central": "عين البيضا",
      "new number": 277,
      "old number": 7677
    },
    {
      "central": "عين البيضا",
      "new number": 278,
      "old number": 7678
    },
    {
      "central": "القنجرة",
      "new number": 480,
      "old number": 7680
    },
    {
      "central": "القنجرة",
      "new number": 481,
      "old number": 7681
    },
    {
      "central": "القنجرة",
      "new number": 582,
      "old number": 7682
    },
    {
      "central": "القنجرة",
      "new number": 485,
      "old number": 7685
    },
    {
      "central": "القنجرة",
      "new number": 586,
      "old number": 7686
    },
    {
      "central": "كسب",
      "new number": 710,
      "old number": 7710
    },
    {
      "central": "كسب",
      "new number": 711,
      "old number": 7711
    },
    {
      "central": "كسب",
      "new number": 712,
      "old number": 7712
    },
    {
      "central": "كسب",
      "new number": 713,
      "old number": 7713
    },
    {
      "central": "كسب",
      "new number": 719,
      "old number": 7719
    },
    {
      "central": "بلوران",
      "new number": 488,
      "old number": 7888
    },
    {
      "central": "بلوران",
      "new number": 489,
      "old number": 7889
    },
    {
      "central": "أم الطيور",
      "new number": 690,
      "old number": 7990
    },
    {
      "central": "الزيتونة",
      "new number": 691,
      "old number": 7991
    },
    {
      "central": "العيسوية",
      "new number": 692,
      "old number": 7992
    },
    {
      "central": "البدروسية",
      "new number": 693,
      "old number": 7993
    },
    {
      "central": "الشيخ حسن",
      "new number": 694,
      "old number": 7994
    },
    {
      "central": "المشرفة",
      "new number": 695,
      "old number": 7995
    },
    {
      "central": "الدالية",
      "new number": 880,
      "old number": 8180
    },
    {
      "central": "الدالية",
      "new number": 881,
      "old number": 8181
    },
    {
      "central": "الدالية",
      "new number": 882,
      "old number": 8182
    },
    {
      "central": "الدالية",
      "new number": 883,
      "old number": 8183
    },
    {
      "central": "الدالية",
      "new number": 884,
      "old number": 8184
    },
    {
      "central": "الدالية",
      "new number": 885,
      "old number": 8185
    },
    {
      "central": "الدالية",
      "new number": 886,
      "old number": 8186
    },
    {
      "central": "الدالية",
      "new number": 887,
      "old number": 8187
    },
    {
      "central": "الدالية",
      "new number": 889,
      "old number": 8189
    },
    {
      "central": "خرايب سالم",
      "new number": 580,
      "old number": 8280
    },
    {
      "central": "وادي القلع",
      "new number": 888,
      "old number": 8288
    },
    {
      "central": "بيت ياشوط",
      "new number": 860,
      "old number": 8360
    },
    {
      "central": "بيت ياشوط",
      "new number": 861,
      "old number": 8361
    },
    {
      "central": "بيت ياشوط",
      "new number": 862,
      "old number": 8362
    },
    {
      "central": "بيت ياشوط",
      "new number": 863,
      "old number": 8363
    },
    {
      "central": "بيت ياشوط",
      "new number": 866,
      "old number": 8366
    },
    {
      "central": "بيت ياشوط",
      "new number": 867,
      "old number": 8367
    },
    {
      "central": "بيت ياشوط",
      "new number": 868,
      "old number": 8368
    },
    {
      "central": "بيت ياشوط",
      "new number": 869,
      "old number": 8369
    },
    {
      "central": "متور",
      "new number": 864,
      "old number": 8464
    },
    {
      "central": "متور",
      "new number": 865,
      "old number": 8465
    },
    {
      "central": "متور",
      "new number": 266,
      "old number": 8466
    },
    {
      "central": "القلايع",
      "new number": 873,
      "old number": 8473
    },
    {
      "central": "القلايع",
      "new number": 874,
      "old number": 8474
    },
    {
      "central": "القلايع",
      "new number": 875,
      "old number": 8475
    },
    {
      "central": "القلايع",
      "new number": 876,
      "old number": 8476
    },
    {
      "central": "زاما",
      "new number": 581,
      "old number": 8481
    },
    {
      "central": "غنيري",
      "new number": 583,
      "old number": 8483
    },
    {
      "central": "دوير الشوا",
      "new number": 584,
      "old number": 8484
    },
    {
      "central": "قصابين",
      "new number": 585,
      "old number": 8485
    },
    {
      "central": "عين الشرقية",
      "new number": 587,
      "old number": 8487
    },
    {
      "central": "قرفيص",
      "new number": 510,
      "old number": 8510
    },
    {
      "central": "حرف المسيترة",
      "new number": 813,
      "old number": 8533
    },
    {
      "central": "حرف المسيترة",
      "new number": 817,
      "old number": 8537
    },
    {
      "central": "حرف المسيترة",
      "new number": 818,
      "old number": 8538
    },
    {
      "central": "العامود",
      "new number": 572,
      "old number": 8572
    },
    {
      "central": "سوكاس 1",
      "new number": 574,
      "old number": 8574
    },
    {
      "central": "الشراشير",
      "new number": 576,
      "old number": 8576
    },
    {
      "central": "سوكاس 2",
      "new number": 677,
      "old number": 8577
    },
    {
      "central": "دوير بعبدا",
      "new number": 511,
      "old number": 8611
    },
    {
      "central": "دوير بعبدا",
      "new number": 812,
      "old number": 8612
    },
    {
      "central": "دوير بعبدا",
      "new number": 513,
      "old number": 8613
    },
    {
      "central": "دوير بعبدا",
      "new number": 816,
      "old number": 8616
    },
    {
      "central": "الحويز",
      "new number": 533,
      "old number": 8633
    },
    {
      "central": "البودي",
      "new number": 767,
      "old number": 8667
    },
    {
      "central": "البودي",
      "new number": 768,
      "old number": 8668
    },
    {
      "central": "البودي",
      "new number": 769,
      "old number": 8669
    },
    {
      "central": "رأس العين",
      "new number": 770,
      "old number": 8670
    },
    {
      "central": "رأس العين",
      "new number": 771,
      "old number": 8671
    },
    {
      "central": "رأس العين",
      "new number": 772,
      "old number": 8672
    },
    {
      "central": "رأس العين",
      "new number": 773,
      "old number": 8673
    },
    {
      "central": "رأس العين",
      "new number": 676,
      "old number": 8676
    },
    {
      "central": "مفرق جبلة",
      "new number": 895,
      "old number": 8695
    },
    {
      "central": "نيننتي",
      "new number": 697,
      "old number": 8697
    },
    {
      "central": "حمام القراحلة",
      "new number": 810,
      "old number": 8710
    },
    {
      "central": "حمام القراحلة",
      "new number": 514,
      "old number": 8714
    },
    {
      "central": "حمام القراحلة",
      "new number": 815,
      "old number": 8715
    },
    {
      "central": "حمام القراحلة",
      "new number": 516,
      "old number": 8716
    },
    {
      "central": "دوير بسنديانة",
      "new number": 517,
      "old number": 8717
    },
    {
      "central": "اسطامو",
      "new number": 617,
      "old number": 8727
    },
    {
      "central": "القطيلبية المركز1",
      "new number": 540,
      "old number": 8740
    },
    {
      "central": "القطيلبية المركز1",
      "new number": 541,
      "old number": 8741
    },
    {
      "central": "القطيلبية المركز2",
      "new number": 542,
      "old number": 8742
    },
    {
      "central": "قطيلبية",
      "new number": 743,
      "old number": 8743
    },
    {
      "central": "قطيلبية",
      "new number": 744,
      "old number": 8744
    },
    {
      "central": "قطيلبية",
      "new number": 745,
      "old number": 8745
    },
    {
      "central": "قطيلبية",
      "new number": 746,
      "old number": 8746
    },
    {
      "central": "القطيلبية",
      "new number": 548,
      "old number": 8748
    },
    {
      "central": "القطيلبية",
      "new number": 549,
      "old number": 8749
    },
    {
      "central": "سيانو",
      "new number": 761,
      "old number": 8761
    },
    {
      "central": "سيانو",
      "new number": 762,
      "old number": 8762
    },
    {
      "central": "سيانو",
      "new number": 227,
      "old number": 8767
    },
    {
      "central": "سيانو",
      "new number": 228,
      "old number": 8768
    },
    {
      "central": "صنوبر",
      "new number": 870,
      "old number": 8770
    },
    {
      "central": "صنوبر 1",
      "new number": 672,
      "old number": 8772
    },
    {
      "central": "صنوبر 1",
      "new number": 673,
      "old number": 8773
    },
    {
      "central": "صنوبر 2",
      "new number": 674,
      "old number": 8774
    },
    {
      "central": "صنوبر 2",
      "new number": 675,
      "old number": 8775
    },
    {
      "central": "صنوبر",
      "new number": 877,
      "old number": 8777
    },
    {
      "central": "صنوبر",
      "new number": 878,
      "old number": 8778
    },
    {
      "central": "صنوبر",
      "new number": 879,
      "old number": 8779
    },
    {
      "central": "مطار حميميم",
      "new number": 896,
      "old number": 8796
    },
    {
      "central": "البرجان",
      "new number": 897,
      "old number": 8797
    },
    {
      "central": "جبلة",
      "new number": 830,
      "old number": 8830
    },
    {
      "central": "جبلة",
      "new number": 831,
      "old number": 8831
    },
    {
      "central": "جبلة",
      "new number": 832,
      "old number": 8832
    },
    {
      "central": "جبلة",
      "new number": 833,
      "old number": 8833
    },
    {
      "central": "جبلة",
      "new number": 834,
      "old number": 8834
    },
    {
      "central": "جبلة",
      "new number": 835,
      "old number": 8835
    },
    {
      "central": "جبلة",
      "new number": 836,
      "old number": 8836
    },
    {
      "central": "جبلة",
      "new number": 837,
      "old number": 8837
    },
    {
      "central": "جبلة",
      "new number": 838,
      "old number": 8838
    },
    {
      "central": "العقيبة",
      "new number": 814,
      "old number": 8914
    },
    {
      "central": "العقيبة",
      "new number": 515,
      "old number": 8915
    },
    {
      "central": "الكرامة",
      "new number": 530,
      "old number": 8930
    },
    {
      "central": "بيت علوني",
      "new number": 531,
      "old number": 8931
    },
    {
      "central": "بيت علوني",
      "new number": 532,
      "old number": 8932
    },
    {
      "central": "دوير الخطيب",
      "new number": 534,
      "old number": 8934
    },
    {
      "central": "عين شقاق",
      "new number": 747,
      "old number": 8947
    },
    {
      "central": "عين شقاق",
      "new number": 748,
      "old number": 8948
    },
    {
      "central": "عرب ملك",
      "new number": 573,
      "old number": 8973
    },
    {
      "central": "بستان الباشا",
      "new number": 575,
      "old number": 8975
    },
    {
      "central": "بتغرامو",
      "new number": 577,
      "old number": 8977
    },
    {
      "central": "بنجارو",
      "new number": 578,
      "old number": 8978
    },
    {
      "central": "محطة جبلة",
      "new number": 898,
      "old number": 8998
    },
    {
      "central": "محطة جبلة",
      "new number": 899,
      "old number": 8999
    },
    {
      "central": "الشاطئ الأزرق",
      "new number": 4290,
      "old number": 21290
    },
    {
      "central": "الشاطئ الأزرق",
      "new number": 4291,
      "old number": 21291
    },
    {
      "central": "الشاطئ الأزرق",
      "new number": 4292,
      "old number": 21292
    },
    {
      "central": "الشاطئ الأزرق",
      "new number": 4293,
      "old number": 21293
    },
    {
      "central": "الشاطئ الأزرق",
      "new number": 4294,
      "old number": 21294
    },
    {
      "central": "الشاطئ الأزرق",
      "new number": 4097,
      "old number": 21497
    },
    {
      "central": "تشرين",
      "new number": 4098,
      "old number": 24098
    },
    {
      "central": "تشرين",
      "new number": 4099,
      "old number": 24099
    },
    {
      "central": "القرداحة",
      "new number": 8559,
      "old number": 65559
    },
    {
      "central": "عين شقاق",
      "new number": 7490,
      "old number": 89490
    },
    {
      "central": "عين شقاق",
      "new number": 7491,
      "old number": 89491
    },
    {
      "central": "عين شقاق",
      "new number": 7492,
      "old number": 89492
    },
    {
      "central": "عين شقاق",
      "new number": 7493,
      "old number": 89493
    },
    {
      "central": "عين شقاق",
      "new number": 7494,
      "old number": 89494
    },
    {
      "central": "عين شقاق",
      "new number": 7495,
      "old number": 89495
    },
    {
      "central": "عين شقاق",
      "new number": 7496,
      "old number": 89496
    },
    {
      "central": "عين شقاق",
      "new number": 7497,
      "old number": 89497
    },
    {
      "central": "عين شقاق",
      "new number": 7498,
      "old number": 89498
    },
    {
      "central": "عين شقاق",
      "new number": 7499,
      "old number": 89499
    }
  ];

  var reverseBtn1 = $('#reverseBtn1');
  var backBtn = $('#backBtn');
  var sixToSevenDiv = $('#sixToSeven');
  var sevenToSixDiv = $('#sevenToSix');




  reverseBtn1.on('click', function (e) {

    e.preventDefault();
    sixToSevenDiv.hide('fast');
    sevenToSixDiv.show('fast');

  });

  backBtn.on('click', function (e) {
    e.preventDefault();
    sevenToSixDiv.hide('fast');
    sixToSevenDiv.show('fast');
  });

  var the_rule2;
  var res2;

  var oldSevenNumber = $('#inputSevenNumber');
  var resultSevenNumber = $('#resultSevenNumber');
  var resultSevenCentral = $('#resultSevenCentral');

  // function parseArabic(str) {
  //   return Number(str.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
  //     return d.charCodeAt(0) - 1632; // Convert Arabic numbers
  //   })
  //   );
  // }
  oldSevenNumber.on('input', function (e) {
    res2 = null;
    var ol_n2 = parseArabic(oldSevenNumber.val().toString()).toString();
    // console.log("parseArabic.: ", ol_n);

    if (isNaN(ol_n2)) {
      resultSevenCentral.html('...');
      resultSevenNumber.html('...');
      // callBtn.attr('href', '#');
      return;
    }
    // console.log("the old no.: ", oldNumber.val());
    if (ol_n2.length > 1) {
      the_rule2 = getRule2(ol_n2);
      res2 = newNumber2(the_rule2, ol_n2);
      resultSevenCentral.html(res2['central']);
      resultSevenNumber.html(res2['new']);
      // callBtn.attr('href', 'tel:' + res['new']);
    } else if (ol_n2.length <= 1) {

      resultSevenCentral.html('...');
      resultSevenNumber.html('...');
      // callBtn.attr('href', '#');
    }
    // console.log(the_rule);
  });

  function getRule2(oldNum2) {
    var r2;
    $.each(convertRules2, function (i, rule2) {
      if (oldNum2.indexOf(rule2['old number'].toString()) === 0) {
        r2 = rule2;
        // console.log(i, rule);

      }
    });
    // console.log(r);
    return r2;
  };



  function newNumber2(r, o) {
    var res2 = [];
    // console.log(r);
    res2['new'] = r ? (o.toString().replace(r['old number'], r['new number'])) : '...';
    res2['central'] = r ? r['central'] : '...';
    return res2;
  };





});




