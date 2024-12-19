"use client";

import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form";

import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

export const WorkspaceIdSettingsPageClient = () => {
  const workspaceId = useWorkspaceId();
  const { data: initialValues, isLoading } = useGetWorkspace({ workspaceId });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!initialValues) {
    return <PageError message="Project with this id not found" />;
  }

  return (
    <div className="w-full lg:max-w-2xl">
      <EditWorkspaceForm initialValues={initialValues} />
    </div>
  );
};
