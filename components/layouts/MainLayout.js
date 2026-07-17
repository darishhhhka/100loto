import React, {useMemo} from "react";
import {node} from "prop-types";
import ModalProvider from "@/components/baseComponents/controllers/modalController/ModalProvider";
import Preloader from "@/components/baseComponents/gui/preloader/Preloader";
import {useIOSGestureHack} from "@/hooks/useIOSGestureHack";
import {provider, ProviderComposer} from "@/providers/ProviderCompose";
import {useEventActions} from "@/hooks/useEventActions";
import NodeProvider from "@/providers/NodeProvider";
import styles from "./MainLayout.module.scss";
import InterviewModal from "@/components/modals/interviewModal/InterviewModal";

export default function MainLayout({children}) {
  useIOSGestureHack();
  useEventActions();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        <ProviderComposer
          providers={useMemo(
            () => [
              provider(NodeProvider),
              provider(ModalProvider, {
                aliases: {
                  interview: {Modal: InterviewModal, props: {}},
                },
              }),
            ],
            [],
          )}
        >
          <Preloader />
          {children}
        </ProviderComposer>
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: node,
};
