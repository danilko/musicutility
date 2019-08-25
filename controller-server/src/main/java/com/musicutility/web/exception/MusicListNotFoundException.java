package com.musicutility.web.exception;

public class MusicListNotFoundException extends RuntimeException {

    public MusicListNotFoundException() {
        super();
    }

    public MusicListNotFoundException(final String message, final Throwable cause) {
        super(message, cause);
    }

    public MusicListNotFoundException(final String message) {
        super(message);
    }

    public MusicListNotFoundException(final Throwable cause) {
        super(cause);
    }
}
