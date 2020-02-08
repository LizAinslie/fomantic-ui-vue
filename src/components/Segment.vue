<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>

<script>
import { colors } from '@/vars';

export default {
	name: 'Segment',
	props: {
		inverted: Boolean,
		placeholder: Boolean,
		raised: Boolean,
		stacked: Boolean,
		piled: Boolean,
		vertical: Boolean,
		disabled: Boolean,
		circular: Boolean,
		clearing: Boolean,
		secondary: Boolean,
		tertiary: Boolean,
		basic: Boolean,
		compact: Boolean,
		attached: {
			validator: value =>
				['top', 'bottom', true, false].indexOf(value) !== -1,
		},
		fitted: {
			validator: value =>
				['horizontally', 'vertically', true, false].indexOf(value) !==
				-1,
		},
		padded: {
			validator: value => ['very', true, false].indexOf(value) !== -1,
		},
		color: {
			type: String,
			validator: value => colors.indexOf(value) !== -1,
		},
		floated: {
			type: String,
			validator: value => ['left', 'right'].indexOf(value) !== -1,
		},
		alignment: {
			type: String,
			validator: value =>
				['left', 'right', 'center'].indexOf(value) !== -1,
		},
		loading: {
			validator: value => ['double', true, false].indexOf(value) !== -1,
		},
	},
	computed: {
		classes: {
			get() {
				const classes = {
					ui: true,
					raised: this.raised,
					stacked: this.stacked,
					piled: this.piled,
					placeholder: this.placeholder,
					inverted: this.inverted,
					vertical: this.vertical,
					disabled: this.disabled,
					circular: this.circular,
					clearing: this.clearing,
					secondary: this.secondary,
					tertiary: this.tertiary,
					basic: this.basic,
					compact: this.compact,
				};

				if (this.attached) {
					switch (this.attached) {
						case 'top':
							classes.top = true;
							break;
						case 'bottom':
							classes.bottom = true;
							break;
						default:
							break;
					}

					classes.attached = true;
				}

				if (this.fitted) {
					switch (this.fitted) {
						case 'vertically':
							classes.vertically = true;
							break;
						case 'horizontally':
							classes.horizontally = true;
							break;
						default:
							break;
					}

					classes.fitted = true;
				}

				if (this.padded)
					switch (this.padded) {
						case 'very':
							classes.very = true;
						// eslint-disable-next-line no-fallthrough
						default:
							classes.padded = true;
					}

				if (this.color) classes[this.color] = true;

				if (this.floated) {
					classes[this.floated] = true;
					classes.floated = true;
				}

				if (this.alignment) {
					classes[this.alignment] = true;
					classes.aligned = true;
				}

				if (this.loading) {
					if (this.loading === 'double') classes.double = true;
					classes.loading = true;
				}

				classes.segment = true;

				return classes;
			},
		},
	},
};
</script>
