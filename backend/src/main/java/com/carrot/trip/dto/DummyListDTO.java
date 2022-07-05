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
        return dummyList;
    }

    /** 일문 */
    public static ArrayList<DummyDTO> getJpnService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
        return dummyList;
    }

    /** 중문간체 */
    public static ArrayList<DummyDTO> getChsService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
        return dummyList;
    }

    /** 중문번체 */
    public static ArrayList<DummyDTO> getChtService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
        return dummyList;
    }

    /** 독어(독일어) */
    public static ArrayList<DummyDTO> getGerService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
        return dummyList;
    }

    /** 불어(프랑스어) */
    public static ArrayList<DummyDTO> getFreService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
        return dummyList;
    }

    /** 서어(스페인어) */
    public static ArrayList<DummyDTO> getSpnService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
        return dummyList;
    }

    /** 노어(러시아어) */
    public static ArrayList<DummyDTO> getRusService() {
        ArrayList<DummyDTO> dummyList = new ArrayList<>();
        return dummyList;
    }
}
