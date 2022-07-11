package com.carrot.trip.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DummyListDTO {

    /**
     *
     * 더미데이터를 왜 동적으로 API로 가져오지않고 하드코딩으로 가져오나요?
     *
     * 그것은 하루 공공데이터 API 요청수가 1000개로 제한이 되어있기 때문입니다.
     * 한번에 여러 CONTENT ID를 넣어서 배열형식으로 요청하는 API가 별도 요청되고있지 않기때문에
     * 평가 더미데이터가 15개라면 15번의 트래픽을 발생시켜야합니다.
     * 속도성능이나 제한된 요청횟수 등을 고려해보았을 때,
     * 더미데이터는 그리 많은 데이터를 필요로하지 않으므로 하드코딩이 상대적으로 더 효율적이라고 판단됩니다.
     *
     * @return
     */
    public static ArrayList<DummyDTO> getKorService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
        dummyList.add(DummyDTO.builder()
                .name("을왕리해수욕장")
                .address("인천광역시 중구 용유서로302번길 16-15")
                .contentId(128767L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/66/2512766_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/66/2512766_image2_1.jpg")
                .build());
        dummyList.add(DummyDTO.builder()
                .name("월미도")
                .address("인천광역시 중구 월미문화로 36")
                .contentId(127585L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/71/1577671_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/71/1577671_image3_1.jpg")
                .build());
        dummyList.add(DummyDTO.builder()
                .name("강화도")
                .address("인천광역시 강화군 강화읍 강화대로")
                .contentId(125502L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image3_1.jpg")
                .build());

        return dummyList;
    }

    /** 영문 */
    public static ArrayList<DummyDTO> getEngService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
         dummyList.add(DummyDTO.builder()
                .name("Eurwang-ri Beach (을왕리해수욕장)")
                .address("16-15, Yongyuseo-ro 302beon-gil, Jung-gu, Incheon")
                .contentId(264514L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/66/2512766_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/66/2512766_image2_1.jpg")
                .build());
        dummyList.add(DummyDTO.builder()
                .name("Seoul Forest (서울숲)")
                .address("273, Ttukseom-ro, Seongdong-gu, Seoul")
                .contentId(789696L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/00/2611300_image2_1.bmp")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/00/2611300_image2_1.bmp")
                .build());
        dummyList.add(DummyDTO.builder()
                .name("Haeundae Beach (해운대해수욕장)")
                .address("264, Haeundaehaebyeon-ro, Haeundae-gu, Busan")
                .contentId(264155L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image3_1.jpg")
                .build());
        return dummyList;
    }

    /** 일문 */
    public static ArrayList<DummyDTO> getJpnService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
        dummyList.add(DummyDTO.builder()
                .name("江華島（강화도）")
                .address("仁川広域市 江華郡 江華邑 江華大路")
                .contentId(281768L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image3_1.jpg")
                .build());
        dummyList.add(DummyDTO.builder()
                .name("北村韓屋村（북촌한옥마을）")
                .address("ソウル特別市 鐘路区 桂洞キル 37")
                .contentId(655800L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/06/2512006_image2_1.jpg")
                .thumbnail2(">http://tong.visitkorea.or.kr/cms/resource/06/2512006_image3_1.jpg")
                .build());
        dummyList.add(DummyDTO.builder()
                .name("海雲台海水浴場（해운대해수욕장)")
                .address("プサン広域市ヘウンデ区ヘウンデヘビョンロ264")
                .contentId(281824L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image3_1.jpg")
                .build());
        return dummyList;
    }

    /** 중문간체 */
    public static ArrayList<DummyDTO> getChsService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
         dummyList.add(DummyDTO.builder()
                .name("首尔林(서울숲)")
                .address("首尔特别市城东区纛岛路273(圣水洞1街、首尔林管理事务所)")
                .contentId(805281L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/00/2611300_image2_1.bmp")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/00/2611300_image2_1.bmp")
                .build());
         dummyList.add(DummyDTO.builder()
                .name("海云台海水浴场해운대해수욕장")
                .address("釜山广域市海云台区海云台海边路264(佑洞)")
                .contentId(331260L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image3_1.jpg")
                .build());
         dummyList.add(DummyDTO.builder()
                .name("江华岛(강화도)")
                .address("仁川广域市江华郡江华邑江华大路")
                .contentId(331203L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image3_1.jpg")
                .build());
        return dummyList;
    }

    /** 중문번체 */
    public static ArrayList<DummyDTO> getChtService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
        dummyList.add(DummyDTO.builder()
                .name("江華島 (강화도)")
                .address("仁川廣域市江華郡江華邑江華大路394")
                .contentId(332500L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image3_1.jpg")
                .build());
         dummyList.add(DummyDTO.builder()
                .name("海雲臺海水浴場(해운대해수욕장)")
                .address("釜山廣域市海雲臺區海雲臺海邊路264")
                .contentId(332578L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image3_1.jpg")
                .build());
         dummyList.add(DummyDTO.builder()
                .name("首爾林(서울숲)")
                .address("首爾特別市城東區纛島路273")
                .contentId(937591L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/00/2611300_image2_1.bmp")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/00/2611300_image2_1.bmp")
                .build());
        return dummyList;
    }

    /** 독어(독일어) */
    public static ArrayList<DummyDTO> getGerService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
        dummyList.add(DummyDTO.builder()
                .name("Seouler Wald (서울숲)")
                .address("273, Ttukseom-ro, Seongdong-gu, Seoul")
                .contentId(811162L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/00/2611300_image2_1.bmp")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/00/2611300_image2_1.bmp")
                .build());
         dummyList.add(DummyDTO.builder()
                .name("Strand Haeundae (해운대해수욕장)")
                .address("264, Haeundaehaebyeon-ro, Haeundae-gu, Busan")
                .contentId(335340L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image3_1.jpg")
                .build());
         dummyList.add(DummyDTO.builder()
                .name("Insel Ganghwado (강화도)")
                .address("Ganghwa-daero, Ganghwa-gun, Incheon")
                .contentId(335515L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image3_1.jpg")
                .build());
        return dummyList;
    }

    /** 불어(프랑스어) */
    public static ArrayList<DummyDTO> getFreService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
        dummyList.add(DummyDTO.builder()
                .name("Forêt de Séoul (서울숲)")
                .address("273, Ttukseom-ro, Seongdong-gu, Seoul")
                .contentId(811631L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/00/2611300_image2_1.bmp")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/00/2611300_image2_1.bmp")
                .build());
         dummyList.add(DummyDTO.builder()
                .name("Strand Haeundae (해운대해수욕장)")
                .address("264, Haeundaehaebyeon-ro, Haeundae-gu, Busan")
                .contentId(335340L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image3_1.jpg")
                .build());
         dummyList.add(DummyDTO.builder()
                .name("Île Ganghwado (강화도)")
                .address("Ganghwa-daero, Gangwha-eup, Ganghwa-gun, Incheon-si路")
                .contentId(333879L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image3_1.jpg")
                .build());
        return dummyList;
    }

    /** 서어(스페인어) */
    public static ArrayList<DummyDTO> getSpnService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
        dummyList.add(DummyDTO.builder()
                .name("Bosque de Seúl (서울숲)")
                .address("Ttukseom-ro 273, Seongdong-gu, Seúl.")
                .contentId(853373L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/00/2611300_image2_1.bmp")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/00/2611300_image2_1.bmp")
                .build());
         dummyList.add(DummyDTO.builder()
                .name("Playa Haeundae (해운대해수욕장)")
                .address("Haeundaehaebyeon-ro 264, Haeundae-gu, Busan.")
                .contentId(334530L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image3_1.jpg")
                .build());
         dummyList.add(DummyDTO.builder()
                .name("Isla Ganghwado (강화도)")
                .address("Ganghwa-daero, Ganghwa-eup, Ganghwa-gun, Incheon.")
                .contentId(334657L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image3_1.jpg")
                .build());
        return dummyList;
    }

    /** 노어(러시아어) */
    public static ArrayList<DummyDTO> getRusService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
        dummyList.add(DummyDTO.builder()
                .name("Сеульский лес (서울숲)")
                .address("273, Ttukseom-ro, Seongdong-gu, Seoul")
                .contentId(336015L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/00/2611300_image2_1.bmp")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/00/2611300_image2_1.bmp")
                .build());
         dummyList.add(DummyDTO.builder()
                .name("Пляж Хэундэ (해운대 해수욕장)")
                .address("264, Haeundaehaebyeon-ro, Haeundae-gu, Busan")
                .contentId(331260L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/67/2612467_image3_1.jpg")
                .build());
         dummyList.add(DummyDTO.builder()
                .name("Остров Канхвадо (강화도)")
                .address("Ganghwa-daero, Ganghwa-gun, Incheon")
                .contentId(336150L)
                .thumbnail1("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image2_1.jpg")
                .thumbnail2("http://tong.visitkorea.or.kr/cms/resource/73/1924973_image3_1.jpg")
                .build());
        return dummyList;
    }
}
