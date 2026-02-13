import { CommunityService } from "@/data/service";

export function ServiceEntry({
    service,
}: {
    service: CommunityService;
}) {
    return (
        <div>
            <p className="text-sm text-zinc-600 leading-relaxed">
                {service.description}
            </p>
        </div>
    );
}
