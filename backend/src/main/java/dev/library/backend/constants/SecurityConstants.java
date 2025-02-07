package dev.library.backend.constants;

import java.util.Date;

public final class SecurityConstants {
    public static long JWT_EXPIRATION = 9000;
    public static Date JWT_ISSUED_AT = new Date(System.currentTimeMillis());
    public static String JWT_SECRET = "acaca1497b7fdf6da8140aa9665c66528da21295e765d8a418b23b6990e1ca29";
    public static Date JWT_EXPIRATION_DATE = new Date(System.currentTimeMillis() + JWT_EXPIRATION);
}
