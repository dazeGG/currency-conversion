<template>
	<NConfigProvider :theme="darkTheme">
		<NNotificationProvider>
			<NGlobalStyle />
			<slot></slot>
		</NNotificationProvider>
	</NConfigProvider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'

import { NConfigProvider, NNotificationProvider, NGlobalStyle } from 'naive-ui'
</script>
