import {OptimizationProfile} from './types';

export const planFrameRanges = ({
	chunkCount,
	chunkSize,
	frameCount,
	optimization,
}: {
	chunkCount: number;
	chunkSize: number;
	frameCount: number;
	optimization: OptimizationProfile | null;
}): [number, number][] => {
	// TODO: Only apply optimization if duration is the same

	if (optimization) {
		return optimization.frameRange;
	}

	return new Array(chunkCount).fill(1).map((_, i) => {
		return [i * chunkSize, Math.min(frameCount, (i + 1) * chunkSize) - 1];
	});
};