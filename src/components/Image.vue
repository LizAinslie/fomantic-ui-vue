<template>
	<img :class="classes" v-if="src" :src="src" :alt="alt ? alt : ''" />
	<div :class="classes" v-else>
		<slot></slot>
	</div>
</template>

<script>
import { sizes } from '@/vars';

export default {
	name: 'Image',
	props: {
		src: String,
		alt: String,
		avatar: Boolean,
		rounded: Boolean,
		circular: Boolean,
		fluid: Boolean,
		centered: Boolean,
		bordered: Boolean,
		verticalAlignment: {
			type: String,
			validator: value =>
				['top', 'middle', 'bottom'].indexOf(value) !== -1,
		},
		spaced: {
			validator: value =>
				['left', 'right', true, false].indexOf(value) !== -1,
		},
		size: {
			type: String,
			validator: value => sizes.indexOf(value) !== -1,
		},
		floated: {
			type: String,
			validator: value => ['left', 'right'].indexOf(value) !== -1,
		},
	},
	computed: {
		classes: {
			get() {
				const classes = {
					ui: true,
					avatar: this.avatar,
					rounded: this.rounded,
					circular: this.circular,
					fluid: this.fluid,
					centered: this.centered,
					bordered: this.bordered,
				};

				if (this.size) classes[this.size] = true;

				if (this.verticalAlignment) {
					classes[this.verticalAlignment] = true;
					classes.aligned = true;
				}

				if (this.floated) {
					classes[this.floated] = true;
					classes.floated = true;
				}

				if (this.spaced)
					switch (this.spaced) {
						case 'left':
						case 'right':
							classes[this.spaced] = true;
						// eslint-disable-next-line no-fallthrough
						default:
							classes.spaced = true;
					}

				classes.image = true;

				return classes;
			},
		},
	},
};
</script>
