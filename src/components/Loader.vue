<template>
	<div :class="classes">{{ classes.text ? text : '' }}</div>
</template>

<script>
import { colors, sizes } from '@/vars';

export default {
	name: 'Loader',
	props: {
		text: String,
		indeterminate: Boolean,
		inverted: Boolean,
		active: Boolean,
		disabled: Boolean,
		inline: Boolean,
		centered: Boolean,
		double: Boolean,
		elastic: Boolean,
		color: {
			type: String,
			validator: value => colors.indexOf(value) !== -1,
		},
		size: {
			type: String,
			validator: value => sizes.indexOf(value) !== -1,
		},
	},
	computed: {
		classes: {
			get() {
				const classes = {
					ui: true,
					indeterminate: this.indeterminate,
					inverted: this.inverted,
					inline: this.inline,
					centered: this.centered,
					active: this.active,
					disabled: this.disabled,
					elastic: this.elastic,
					double: this.double,
					text: this.text !== undefined && this.text !== '',
				};

				if (this.size) classes[this.size] = true;
				if (this.color) classes[this.color] = true;

				classes.loader = true;

				return classes;
			},
		},
	},
};
</script>
