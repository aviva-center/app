<script setup>
import { ref, onMounted } from "vue";
import { mdiAccountMultiple, mdiChartTimelineVariant, mdiLibrary, mdiGroup } from "@mdi/js";
import * as chartConfig from "@/components/Charts/chart.config.js";
import SectionMain from "@/components/SectionMain.vue";
import CardBoxWidget from "@/components/CardBoxWidget.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";

const chartData = ref(null);

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData();
};

onMounted(() => {
  fillChartData();
});
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiChartTimelineVariant"
        title="Bem vindo a Aviva Center"
        main
      >
        <!-- <BaseButton
          href="https://github.com/justboil/admin-one-vue-tailwind"
          target="_blank"
          :icon="mdiGithub"
          label="Star on GitHub"
          color="contrast"
          rounded-full
          small
        /> -->
      </SectionTitleLineWithButton>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <CardBoxWidget
          color="text-emerald-500"
          :icon="mdiAccountMultiple"
          :number="512"
          label="Membros"
        />
        <CardBoxWidget
          color="text-blue-500"
          :icon="mdiGroup"
          :number="10"
          label="Ministérios"
        />
        <CardBoxWidget
          color="text-blue-500"
          :icon="mdiLibrary"
          :number="10"
          label="Estudos Bíblicos"
        />
      </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>
