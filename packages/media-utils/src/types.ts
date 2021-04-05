export type AudioData = {
	channelWaveforms: Float32Array[];
	sampleRate: number;
	durationInSeconds: number;
	numberOfChannels: number;
	resultId: string;
	isRemote: boolean;
};

export type VideoData = {
	durationInSeconds: number;
	width: number;
	height: number;
	aspectRatio: number;
	isRemote: boolean;
};
