package com.musicutility.web.exception;

public class MusicListIdMismatchException extends RuntimeException {

    public MusicListIdMismatchException() {
        super();
    }

    public MusicListIdMismatchException(final String message, final Throwable cause) {
        super(message, cause);
    }

    public MusicListIdMismatchException(final String message) {
        super(message);
    }

    public MusicListIdMismatchException(final Throwable cause) {
        super(cause);
    }
}
