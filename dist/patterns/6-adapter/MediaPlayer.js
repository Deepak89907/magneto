"use strict";
/**
 * ADAPTER PATTERN
 *
 * Real-life example: Media Player System
 * Use case: Play different media formats (MP3, MP4, AVI) through a unified interface
 * by adapting existing third-party media libraries to work with our MediaPlayer.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistManager = exports.AudioPlayer = exports.Mp3Adapter = exports.StreamingAdapter = exports.AdvancedMediaAdapter = exports.SpotifyStreamer = exports.YouTubeStreamer = exports.Mp3Player = exports.VlcPlayer = void 0;
exports.demonstrateAdapter = demonstrateAdapter;
// Concrete implementations of third-party players (Adaptees)
class VlcPlayer {
    playVlc(fileName) {
        console.log(`🎬 Playing VLC file: ${fileName}`);
        console.log('   Using VLC Media Player engine');
        console.log('   Features: High-quality video, multiple codecs support');
    }
    playMp4(fileName) {
        console.log(`🎥 Playing MP4 file: ${fileName}`);
        console.log('   Using VLC MP4 decoder');
        console.log('   Features: Hardware acceleration, HD support');
    }
}
exports.VlcPlayer = VlcPlayer;
class Mp3Player {
    playMp3(fileName) {
        console.log(`🎵 Playing MP3 file: ${fileName}`);
        console.log('   Using built-in MP3 decoder');
        console.log('   Features: High-quality audio, low latency');
    }
}
exports.Mp3Player = Mp3Player;
class YouTubeStreamer {
    streamContent(url, format) {
        console.log(`📺 Streaming from YouTube: ${url}`);
        console.log(`   Format: ${format}`);
        console.log('   Features: Adaptive bitrate, live streaming');
    }
}
exports.YouTubeStreamer = YouTubeStreamer;
class SpotifyStreamer {
    streamContent(url, format) {
        console.log(`🎼 Streaming from Spotify: ${url}`);
        console.log(`   Format: ${format}`);
        console.log('   Features: Offline caching, high-quality audio');
    }
}
exports.SpotifyStreamer = SpotifyStreamer;
// Adapters that bridge the gap between interfaces
class AdvancedMediaAdapter {
    constructor(audioType) {
        if (audioType.toLowerCase() === 'vlc' || audioType.toLowerCase() === 'mp4') {
            this.advancedPlayer = new VlcPlayer();
        }
        else {
            throw new Error(`${audioType} format not supported by AdvancedMediaAdapter`);
        }
    }
    play(audioType, fileName) {
        const type = audioType.toLowerCase();
        if (type === 'vlc') {
            this.advancedPlayer.playVlc(fileName);
        }
        else if (type === 'mp4') {
            this.advancedPlayer.playMp4(fileName);
        }
    }
}
exports.AdvancedMediaAdapter = AdvancedMediaAdapter;
class StreamingAdapter {
    constructor(platform) {
        this.platform = platform.toLowerCase();
        if (this.platform === 'youtube') {
            this.streamer = new YouTubeStreamer();
        }
        else if (this.platform === 'spotify') {
            this.streamer = new SpotifyStreamer();
        }
        else {
            throw new Error(`${platform} streaming platform not supported`);
        }
    }
    play(audioType, fileName) {
        // Convert fileName to streaming URL format
        const streamingUrl = this.convertToStreamingUrl(fileName);
        this.streamer.streamContent(streamingUrl, audioType);
    }
    convertToStreamingUrl(fileName) {
        // Simulate URL conversion logic
        if (this.platform === 'youtube') {
            return `https://youtube.com/watch?v=${fileName}`;
        }
        else if (this.platform === 'spotify') {
            return `https://open.spotify.com/track/${fileName}`;
        }
        return fileName;
    }
}
exports.StreamingAdapter = StreamingAdapter;
class Mp3Adapter {
    constructor() {
        this.mp3Player = new Mp3Player();
    }
    play(audioType, fileName) {
        if (audioType.toLowerCase() === 'mp3') {
            this.mp3Player.playMp3(fileName);
        }
        else {
            throw new Error(`${audioType} format not supported by Mp3Adapter`);
        }
    }
}
exports.Mp3Adapter = Mp3Adapter;
// Main MediaPlayer implementation (Context)
class AudioPlayer {
    constructor() {
        this.supportedFormats = ['mp3', 'mp4', 'vlc', 'youtube', 'spotify'];
    }
    play(audioType, fileName) {
        const type = audioType.toLowerCase();
        console.log(`\n🎯 Attempting to play ${type.toUpperCase()} file: ${fileName}`);
        if (!this.supportedFormats.includes(type)) {
            console.log(`❌ Error: ${audioType} format is not supported.`);
            console.log(`Supported formats: ${this.supportedFormats.join(', ')}`);
            return;
        }
        try {
            if (type === 'mp3') {
                // Use adapter for MP3
                const adapter = new Mp3Adapter();
                adapter.play(audioType, fileName);
            }
            else if (type === 'vlc' || type === 'mp4') {
                // Use adapter for advanced media formats
                const adapter = new AdvancedMediaAdapter(audioType);
                adapter.play(audioType, fileName);
            }
            else if (type === 'youtube' || type === 'spotify') {
                // Use adapter for streaming platforms
                const adapter = new StreamingAdapter(audioType);
                adapter.play('stream', fileName);
            }
            console.log(`✅ Successfully played ${fileName}`);
        }
        catch (error) {
            console.log(`❌ Error playing ${fileName}: ${error}`);
        }
    }
    getSupportedFormats() {
        return [...this.supportedFormats];
    }
    addFormatSupport(format, adapter) {
        if (!this.supportedFormats.includes(format.toLowerCase())) {
            this.supportedFormats.push(format.toLowerCase());
            console.log(`✅ Added support for ${format.toUpperCase()} format`);
        }
    }
}
exports.AudioPlayer = AudioPlayer;
// Enhanced Media Player with playlist support
class PlaylistManager {
    constructor(player) {
        this.playlist = [];
        this.player = player;
    }
    addToPlaylist(type, file, title) {
        this.playlist.push({ type, file, title });
        console.log(`➕ Added to playlist: ${title || file} (${type.toUpperCase()})`);
    }
    playPlaylist() {
        console.log('\n🎵 STARTING PLAYLIST 🎵');
        console.log(`Total items: ${this.playlist.length}`);
        console.log('='.repeat(50));
        this.playlist.forEach((item, index) => {
            console.log(`\n[${index + 1}/${this.playlist.length}] Now playing: ${item.title || item.file}`);
            this.player.play(item.type, item.file);
            // Simulate playback time
            console.log(`⏱️  Duration: ${this.getRandomDuration()} minutes`);
        });
        console.log('\n🎵 PLAYLIST COMPLETED 🎵');
    }
    getRandomDuration() {
        const minutes = Math.floor(Math.random() * 5) + 2; // 2-6 minutes
        const seconds = Math.floor(Math.random() * 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    clearPlaylist() {
        this.playlist = [];
        console.log('🗑️  Playlist cleared');
    }
    getPlaylistInfo() {
        console.log('\n📋 Current Playlist:');
        if (this.playlist.length === 0) {
            console.log('   (empty)');
            return;
        }
        this.playlist.forEach((item, index) => {
            console.log(`   ${index + 1}. ${item.title || item.file} (${item.type.toUpperCase()})`);
        });
    }
}
exports.PlaylistManager = PlaylistManager;
// Example usage
function demonstrateAdapter() {
    console.log('\n=== ADAPTER PATTERN DEMO ===');
    const player = new AudioPlayer();
    console.log('📱 Universal Media Player v1.0');
    console.log(`Supported formats: ${player.getSupportedFormats().join(', ').toUpperCase()}`);
    // Test different media formats
    console.log('\n--- Testing Individual Files ---');
    player.play('mp3', 'song.mp3');
    player.play('mp4', 'movie.mp4');
    player.play('vlc', 'documentary.avi');
    player.play('youtube', 'dQw4w9WgXcQ'); // Rick Roll video ID
    player.play('spotify', '4iV5W9uYEdDUVwUn90OTdJ'); // Song ID
    // Test unsupported format
    player.play('wav', 'audio.wav');
    // Demonstrate playlist functionality
    console.log('\n--- Testing Playlist Manager ---');
    const playlistManager = new PlaylistManager(player);
    playlistManager.addToPlaylist('mp3', 'favorite_song.mp3', 'My Favorite Song');
    playlistManager.addToPlaylist('mp4', 'vacation_video.mp4', 'Vacation Memories');
    playlistManager.addToPlaylist('youtube', 'dQw4w9WgXcQ', 'Never Gonna Give You Up');
    playlistManager.addToPlaylist('spotify', '4iV5W9uYEdDUVwUn90OTdJ', 'Bohemian Rhapsody');
    playlistManager.addToPlaylist('vlc', 'concert.mkv', 'Live Concert Recording');
    playlistManager.getPlaylistInfo();
    playlistManager.playPlaylist();
    // Demonstrate adapter flexibility
    console.log('\n--- Adapter Benefits ---');
    console.log('✅ Single interface for multiple media formats');
    console.log('✅ Easy to add new formats without changing existing code');
    console.log('✅ Legacy third-party libraries can be integrated seamlessly');
    console.log('✅ Client code doesn\'t need to know about different implementations');
}
//# sourceMappingURL=MediaPlayer.js.map