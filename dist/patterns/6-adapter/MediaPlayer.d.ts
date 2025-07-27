/**
 * ADAPTER PATTERN
 *
 * Real-life example: Media Player System
 * Use case: Play different media formats (MP3, MP4, AVI) through a unified interface
 * by adapting existing third-party media libraries to work with our MediaPlayer.
 */
export interface MediaPlayer {
    play(audioType: string, fileName: string): void;
}
export interface AdvancedMediaPlayer {
    playVlc(fileName: string): void;
    playMp4(fileName: string): void;
}
export interface StreamingPlayer {
    streamContent(url: string, format: string): void;
}
export declare class VlcPlayer implements AdvancedMediaPlayer {
    playVlc(fileName: string): void;
    playMp4(fileName: string): void;
}
export declare class Mp3Player {
    playMp3(fileName: string): void;
}
export declare class YouTubeStreamer implements StreamingPlayer {
    streamContent(url: string, format: string): void;
}
export declare class SpotifyStreamer implements StreamingPlayer {
    streamContent(url: string, format: string): void;
}
export declare class AdvancedMediaAdapter implements MediaPlayer {
    private advancedPlayer;
    constructor(audioType: string);
    play(audioType: string, fileName: string): void;
}
export declare class StreamingAdapter implements MediaPlayer {
    private streamer;
    private platform;
    constructor(platform: string);
    play(audioType: string, fileName: string): void;
    private convertToStreamingUrl;
}
export declare class Mp3Adapter implements MediaPlayer {
    private mp3Player;
    constructor();
    play(audioType: string, fileName: string): void;
}
export declare class AudioPlayer implements MediaPlayer {
    private supportedFormats;
    play(audioType: string, fileName: string): void;
    getSupportedFormats(): string[];
    addFormatSupport(format: string, adapter: MediaPlayer): void;
}
export declare class PlaylistManager {
    private player;
    private playlist;
    constructor(player: MediaPlayer);
    addToPlaylist(type: string, file: string, title?: string): void;
    playPlaylist(): void;
    private getRandomDuration;
    clearPlaylist(): void;
    getPlaylistInfo(): void;
}
export declare function demonstrateAdapter(): void;
//# sourceMappingURL=MediaPlayer.d.ts.map