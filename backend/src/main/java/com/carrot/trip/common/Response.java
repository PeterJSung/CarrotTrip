package com.carrot.trip.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;
import com.carrot.trip.type.StatusCode;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Builder
@Data
public class Response<T> {
    private StatusCode statusCode;

    private String message;
    private final T data;
    private String errorCode;

    public static <T> Response<T> ok(@Nullable T data) {
        return new Response<>(StatusCode.OK, StatusCode.OK.getMessage(), data, null);
    }

    public static Response<String> ok() {
        return new Response<>(StatusCode.OK, StatusCode.OK.getMessage(), null, null);
    }

    public static <T> Response<T> fail(@NonNull String message, @Nullable T data, String errorCode) {
        return new Response<>(StatusCode.FAIL, message, data, errorCode);
    }

    public static Response<String> fail(@NonNull String message, String errorCode) {
        return new Response<>(StatusCode.FAIL, message, null, errorCode);
    }
}