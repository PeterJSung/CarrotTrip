package com.carrot.trip.repository;

import com.carrot.trip.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    boolean existsByNickname(String nickname);

    Member findByPhoneNumber(String phoneNumber);

    ArrayList<Member> findByPhoneNumberIn(ArrayList<String> phoneNumbers);

    Optional<Member> findByNickname(String nick);

    ArrayList<Member> findAll();

    ArrayList<Member> findByOrderByPointDesc();

//    @Transactional
//    @Modifying(clearAutomatically = true)
//    @Query("UPDATE Member m set m.accountMoney = ?2, m.point = ?3 where m.nickname = ?1")
//    int updateAccountMoneyAndPoint(@Param("usrNickname") String usrNickname, @Param("usrAccountMoney") Integer usrAccountMoney, @Param("usrPoint") Integer usrPoint);

}