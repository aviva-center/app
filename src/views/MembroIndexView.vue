<script setup>
import {
  // mdiMonitorCellphone,
  // mdiTableOff,
  mdiHuman,
  mdiPlus
} from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
// import NotificationBar from "@/components/NotificationBar.vue";
import TableMembers from "@/components/TableMembers.vue";
import CardBox from "@/components/CardBox.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/BaseButton.vue";
// import CardBoxComponentEmpty from "@/components/CardBoxComponentEmpty.vue";
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiHuman" title="Membros" main>
        <BaseButton
          :icon="mdiPlus"
          label="Novo Membro"
          color="success"
          rounded-full
          small
          to="/membro/cadastrar"
        />
      </SectionTitleLineWithButton>
      <!-- <NotificationBar color="info" :icon="mdiMonitorCellphone">
        <b>Responsive table.</b> Collapses on mobile
      </NotificationBar> -->

      <CardBox class="mb-6" has-table>
        <TableMembers />
      </CardBox>

      <!-- <SectionTitleLineWithButton :icon="mdiTableOff" title="Empty variation" /> -->

      <!-- <NotificationBar color="danger" :icon="mdiTableOff">
        <b>Empty table.</b> When there's nothing to show
      </NotificationBar> -->

      <!-- <CardBox>
        <CardBoxComponentEmpty />
      </CardBox> -->
    </SectionMain>
  </LayoutAuthenticated>
</template>
