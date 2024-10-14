<template>
<div>
    <div class="btn-group">
        <ul>
            <li><button class="btn show-on-small" @click="() => toggleLayer(layers, 'charges01')">1단계 요금표</button></li>
            <li><button class="btn show-on-small" @click="() => toggleLayer(layers, 'charges02')">2단계 요금표</button></li>
            <li><button class="btn show-on-small" @click="() => toggleLayer(layers, 'charges03')">3단계 요금표</button></li>
        </ul>
    </div>
</div>

<Charges01 v-if="layers.charges01" @close="() => toggleLayer(layers, 'charges01')" />
<Charges02 v-if="layers.charges02" @close="() => toggleLayer(layers, 'charges02')" />
<Charges03 v-if="layers.charges03" @close="() => toggleLayer(layers, 'charges03')" />
</template>

<script setup lang="ts">
import { toggleLayer } from '@/utils/common';
// layer
import Charges01 from './layer/Charges01.vue';
import Charges02 from './layer/Charges02.vue';
import Charges03 from './layer/Charges03.vue';

const layers = reactive({
    charges01: false,
    charges02: false,
    charges03: false,
});
</script>

<style lang="scss" scoped>
.btn-group {
    ul {
        display: flex;
        justify-content: flex-end;
        li {
            margin-left: 10px;
        }
    }
}
</style>
