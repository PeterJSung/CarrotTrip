package com.carrot.trip.repository;

import com.carrot.trip.entity.Evaluation;
import com.carrot.trip.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface EvaluationRepository  extends JpaRepository<Evaluation, Long> {

    ArrayList<Evaluation> findAll();

    ArrayList<Evaluation> findByMemberNickname(String memberNickname);

    Evaluation findByMemberNicknameAndApiId(String memberNickname, Long apiIds);

    ArrayList<Evaluation> findByMemberNicknameAndApiIdIn(String memberNickname, ArrayList<Long> apiIds);

    ArrayList<Evaluation> findByApiId(Long apiId);

    int deleteEvaluationsByMemberNicknameAndApiId(String memberNickname, Long apiIds);


//    @Transactional
//    @Modifying(clearAutomatically = true)
//    @Query("UPDATE Member m set m.accountMoney = ?2, m.point = ?3 where m.nickname = ?1")
//    int updateAccountMoneyAndPoint(@Param("usrNickname") String usrNickname, @Param("usrAccountMoney") Integer usrAccountMoney, @Param("usrPoint") Integer usrPoint);

}
