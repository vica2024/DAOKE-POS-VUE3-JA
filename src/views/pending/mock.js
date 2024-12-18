import Mock from 'mockjs';
import setupMock, {successResponseWrap} from '@/utils/setup-mock';

const depositList = {
    "count": 1487,
    "list": [
        {
            "tourist_uid": "7253",
            "add_time": 1718327998,
            "cart_id": "35565,35566,35567",
            "store_id": 10,
            "staff_id": 5,
            "uid": 1,
            "nickname": "John",
            "avatar": null,
            "id": "35565,35566,35567",
            "_add_time": "2024.06.14 09:16:38",
            "price": 22.50
        },
        {
            "tourist_uid": "7254",
            "add_time": 1718328998,
            "cart_id": "35568,35569,35570",
            "store_id": 11,
            "staff_id": 6,
            "uid": 2,
            "nickname": "Sophia",
            "avatar": null,
            "id": "35568,35569,35570",
            "_add_time": "2024.06.14 09:29:58",
            "price": 15.75
        },
        {
            "tourist_uid": "7255",
            "add_time": 1718339998,
            "cart_id": "35571,35572,35573",
            "store_id": 12,
            "staff_id": 7,
            "uid": 3,
            "nickname": "Miguel",
            "avatar": null,
            "id": "35571,35572,35573",
            "_add_time": "2024.06.14 09:46:38",
            "price": 18.90
        },
        {
            "tourist_uid": "7256",
            "add_time": 1718341998,
            "cart_id": "35574,35575,35576",
            "store_id": 13,
            "staff_id": 8,
            "uid": 4,
            "nickname": "Yuki",
            "avatar": null,
            "id": "35574,35575,35576",
            "_add_time": "2024.06.14 09:59:58",
            "price": 23.80
        },
        {
            "tourist_uid": "7257",
            "add_time": 1718343998,
            "cart_id": "35577,35578,35579",
            "store_id": 14,
            "staff_id": 9,
            "uid": 5,
            "nickname": "Liam",
            "avatar": null,
            "id": "35577,35578,35579",
            "_add_time": "2024.06.14 10:13:18",
            "price": 20.45
        },
        {
            "tourist_uid": "7258",
            "add_time": 1718345998,
            "cart_id": "35580,35581,35582",
            "store_id": 15,
            "staff_id": 10,
            "uid": 6,
            "nickname": "Ananya",
            "avatar": null,
            "id": "35580,35581,35582",
            "_add_time": "2024.06.14 10:26:38",
            "price": 19.99
        },
        {
            "tourist_uid": "7259",
            "add_time": 1718347998,
            "cart_id": "35583,35584,35585",
            "store_id": 16,
            "staff_id": 11,
            "uid": 7,
            "nickname": "Chen",
            "avatar": null,
            "id": "35583,35584,35585",
            "_add_time": "2024.06.14 10:39:58",
            "price": 21.70
        },
        {
            "tourist_uid": "7260",
            "add_time": 1718349998,
            "cart_id": "35586,35587,35588",
            "store_id": 17,
            "staff_id": 12,
            "uid": 8,
            "nickname": "Olga",
            "avatar": null,
            "id": "35586,35587,35588",
            "_add_time": "2024.06.14 10:53:18",
            "price": 16.30
        },
        {
            "tourist_uid": "7261",
            "add_time": 1718351998,
            "cart_id": "35589,35590,35591",
            "store_id": 18,
            "staff_id": 13,
            "uid": 9,
            "nickname": "Ahmed",
            "avatar": null,
            "id": "35589,35590,35591",
            "_add_time": "2024.06.14 11:06:38",
            "price": 24.60
        }
    ]
};

const customer_info = {
    "id": 11195,
    "uid": 21881,
    "order_id": "wx530312023548887040",
    "order_status": 0,
    "pay_type": "offline",
    "paid": 0,
    "deduction_price": "0.00",
    "coupon_price": "0.00",
    "total_price": "490.00",
    "pay_price": "392.00",
    "change_price": "0.00",
    "refund_status": 0,
    "staff_id": 0,
    "remark": null,
    "is_del": 0,
    "is_system_del": 0,
    "status_name": "",
    "userInfo": {
        "uid": 21881,
        "real_name": "",
        "birthday": 0,
        "card_id": "",
        "mark": "",
        "partner_id": 0,
        "group_id": 0,
        "nickname": "183****9820",
        "avatar": "https:\/\/multi-store.crmeb.net\/uploads\/attach\/2023\/04\/20230426\/ed8f8cf4cfbd6b46c821b082ce2e4e76.png",
        "phone": "183****9820",
        "add_time": 1708233603,
        "last_time": 1717722576,
        "now_money": "1.99",
        "brokerage_price": "0.00",
        "integral": 10,
        "exp": "0.01",
        "sign_num": 0,
        "sign_remind": 0,
        "status": 1,
        "level": 0,
        "agent_level": 0,
        "spread_open": 1,
        "spread_uid": 0,
        "spread_time": 0,
        "spread_lottery": 1,
        "work_uid": 0,
        "work_userid": null,
        "user_type": "routine",
        "is_promoter": 1,
        "pay_count": 1,
        "spread_count": 0,
        "addres": "",
        "adminid": 0,
        "login_type": "",
        "login_city": "山东省青岛市",
        "record_phone": "",
        "is_money_level": 0,
        "is_ever_level": 0,
        "overdue_time": 0,
        "uniqid": "",
        "bar_code": "515652887",
        "rand_code": 0,
        "sex": 0,
        "provincials": "",
        "province": 0,
        "city": 0,
        "area": 0,
        "street": 0,
        "is_del": 0,
        "delete_time": null,
        "extend_info": [],
        "level_status": 0,
        "level_extend_info": [],
        "is_first_order": 0,
        "is_newcomer": 0
    },
    "staff": [],
    "_info": {
        "21881530312012140380160": {
            "cart_info": {
                "id": "21881530312012140380160",
                "type": 10,
                "store_id": 10,
                "tourist_uid": "",
                "product_type": 0,
                "collate_code_id": 880,
                "activity_id": 0,
                "discount_product_id": 0,
                "product_id": 2045,
                "product_attr_unique": "5f5e4624",
                "cart_num": 1,
                "productInfo": {
                    "id": 2045,
                    "pid": 2033,
                    "type": 1,
                    "product_type": 0,
                    "relation_id": 10,
                    "mer_id": 0,
                    "image": "https:\/\/multi-store.crmeb.net\/uploads\/attach\/2024\/05\/24\/fc63ee052b9dc66bd70a1e013510ded2.jpg",
                    "recommend_image": "",
                    "slider_image": [
                        "https:\/\/multi-store.crmeb.net\/uploads\/attach\/2024\/05\/24\/fc63ee052b9dc66bd70a1e013510ded2.jpg",
                        "https:\/\/multi-store.crmeb.net\/uploads\/attach\/2024\/05\/24\/3931c175937ec992bf617a45b14f7a4f.jpg",
                        "https:\/\/multi-store.crmeb.net\/uploads\/attach\/2024\/05\/24\/05c22a7c821007f87d421945aa5cc0f0.jpg",
                        "https:\/\/multi-store.crmeb.net\/uploads\/attach\/2024\/05\/24\/773e92ec7f536d453494c781078b5e79.jpg"
                    ],
                    "store_name": "【618抢先购】CT四色眼影盘新色枕边话哑光亮片粉棕彩妆官方正品",
                    "store_info": "",
                    "keyword": "",
                    "bar_code": "",
                    "cate_id": "1,197,196,6,15",
                    "price": "490.00",
                    "vip_price": "0.00",
                    "ot_price": "500.00",
                    "postage": "0.00",
                    "delivery_type": [
                        "3",
                        "2"
                    ],
                    "freight": 1,
                    "unit_name": "套",
                    "sort": 0,
                    "star": "5.0",
                    "collect": 1,
                    "sales": 1,
                    "stock": 139999,
                    "show_type": 0,
                    "is_show": 1,
                    "is_hot": 0,
                    "is_benefit": 0,
                    "is_best": 0,
                    "is_new": 0,
                    "add_time": 1716513294,
                    "is_postage": 0,
                    "is_verify": 1,
                    "is_del": 0,
                    "mer_use": 0,
                    "give_integral": "0.00",
                    "cost": "0.00",
                    "is_seckill": 0,
                    "is_bargain": null,
                    "is_good": 0,
                    "is_sub": 0,
                    "is_vip": 0,
                    "ficti": 0,
                    "browse": 0,
                    "code_path": "",
                    "soure_link": "https:\/\/detail.tmall.com\/item.htm?ali_refid=a3_430673_1006:1520760026:N:9p\/MKkdSghnD+kBXECEHyQ==:b9775ccc641701f7f93f4284dd0b5b22&ali_trackid=1_b9775ccc641701f7f93f4284dd0b5b22&bxsign=tanapWC4YvOi3ae5ebfeVupyQDU604Fi_USta3RbtYyDYXTMTlFn_-N3FGDZvk0NvkRXCKr",
                    "video_open": 1,
                    "video_link": "https:\/\/multi-store.crmeb.net\/uploads\/video\/2024\/05\/27\/06e9b6ba8871e70de44f16a1749c8faa.mp4",
                    "temp_id": 0,
                    "spec_type": 1,
                    "activity": "0,1,2,3",
                    "spu": "1011015680790",
                    "label_id": [],
                    "command_word": "",
                    "recommend_list": "",
                    "brand_id": 0,
                    "brand_com": "",
                    "code": "",
                    "is_support_refund": 1,
                    "store_label_id": [],
                    "ensure_id": [
                        9,
                        8,
                        7,
                        6,
                        5
                    ],
                    "specs": [
                        {
                            "id": "125",
                            "temp_id": "34",
                            "name": "适用皮肤",
                            "value": "油性、中性、混合",
                            "sort": "0"
                        },
                        {
                            "id": "126",
                            "temp_id": "34",
                            "name": "效果",
                            "value": "祛油祛痘",
                            "sort": "0"
                        },
                        {
                            "id": "127",
                            "temp_id": "34",
                            "name": "适用人群",
                            "value": "50岁以下",
                            "sort": "0"
                        }
                    ],
                    "specs_id": 34,
                    "is_vip_product": 0,
                    "is_presale_product": 0,
                    "presale_start_time": 0,
                    "presale_end_time": 0,
                    "presale_day": 0,
                    "auto_on_time": 0,
                    "auto_off_time": 0,
                    "custom_form": [],
                    "system_form_id": 0,
                    "applicable_type": 1,
                    "applicable_store_id": [],
                    "is_limit": 0,
                    "limit_type": 0,
                    "limit_num": 0,
                    "refusal": "",
                    "is_police": 0,
                    "is_sold": 0,
                    "attrInfo": {
                        "id": 16416,
                        "product_id": 2045,
                        "product_type": 0,
                        "suk": "【经典热卖】EXAGGER-EYES 明眸",
                        "stock": 10000,
                        "sum_stock": 10000,
                        "sales": 0,
                        "price": "490.00",
                        "settle_price": "0.00",
                        "integral": 0,
                        "image": "https:\/\/multi-store.crmeb.net\/uploads\/attach\/2024\/05\/24\/039866e652e9dcf1aa8d92daeaa98644.jpg",
                        "unique": "5f5e4624",
                        "cost": "0.00",
                        "bar_code": "",
                        "ot_price": "500.00",
                        "vip_price": "0.00",
                        "weight": "0.00",
                        "volume": "0.00",
                        "brokerage": "0.00",
                        "brokerage_two": "0.00",
                        "type": 0,
                        "quota": 0,
                        "quota_show": 0,
                        "code": "",
                        "disk_info": "",
                        "write_times": 1,
                        "write_valid": 1,
                        "write_days": 0,
                        "write_start": 0,
                        "write_end": 0
                    },
                    "express_delivery": false,
                    "store_mention": true,
                    "store_delivery": true,
                    "store_label": []
                },
                "sum_price": "490.00",
                "truePrice": 392,
                "integral": 0,
                "trueStock": 10000,
                "costPrice": "0.00",
                "is_gift": 0,
                "attrStatus": true,
                "vip_truePrice": 0,
                "branch_stock": 10000,
                "branch_sales": 0,
                "price_type": "promotions",
                "is_valid": 1,
                "promotions_id": [
                    57
                ],
                "promotions_true_price": "98.00",
                "postage_price": 0,
                "supplier_id": 0,
                "is_support_refund": 1,
                "refund_num": 0,
                "vip_sum_truePrice": "0.00"
            }
        }
    },
    "vip_true_price": "0.00",
    "is_cashier_yue_pay_verify": 1
}

setupMock({
    setup() {
        // Quality Inspection
        // Mock.mock(new RegExp('/order/get_hang_list'), () => {
        //     return successResponseWrap(depositList);
        // });

        // Mock.mock(new RegExp('/order/info'), () => {
        //     return successResponseWrap(customer_info);
        // });
    },
});
